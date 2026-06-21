# SvelteKit + SSG Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate component-party.dev from a client-only Svelte 5 SPA to SvelteKit with `adapter-static` + full prerender, so every framework comparison is present in the static HTML (fixes finding C1 and unblocks the SEO findings), at iso-functionality.

**Architecture:** SvelteKit `^2` running on the existing Vite+ toolchain (`vite` aliased to `@voidzero-dev/vite-plus-core`). The home route `/` renders the current app (default selection + arbitrary `?f=` client-side); `/compare/[comparison]` renders prerendered 2-framework pages (153 unordered pairs + canonical, inverse redirected via `_redirects`). The build-time content pipeline (`build/generateContentVitePlugin.ts` → `src/generatedContent/`) is kept unchanged. A shared `Comparison.svelte` component (extracted from `Index.svelte`) backs both routes.

**Tech Stack:** SvelteKit 2, Svelte 5 (runes), `@sveltejs/adapter-static`, Vite+ (`vp`), Tailwind v4, Shiki (build-time), Playwright, Vitest.

## Global Constraints

- **Prerequisite (process):** `audit/wave-1-quickwins` must be merged into `main` and this branch rebased onto it BEFORE Task 3, so `src/Index.svelte` already contains the `normalizeFrameworkIds` helper, the importer guard, the `aria-pressed`/`h4`/contribute-link fixes, and `copyToClipboard` rewrite. The extraction in Task 3 carries those fixes forward verbatim. If a rebase is not done, re-apply the M1 normalization helper inside `Comparison.svelte` during Task 3.
- **Keep Vite+.** `vite` resolves to `@voidzero-dev/vite-plus-core` (pinned `0.2.1`), `vite-plus` pinned `0.2.1`. Never reintroduce standard `vite`.
- **Svelte 5 runes only.** `$props`, `$state`, `$derived`, `$effect`, `{@render}`. No legacy `export let` / slots.
- **Iso-functionality.** No new product features (no diff view, search, theme toggle, OG images, JSON-LD per page). Reproduce current behavior exactly.
- **Canonical pair order = order of the `frameworks` array in `frameworks.ts`.** For a pair, the framework appearing earlier in that array is the left side.
- **Pair URL format:** `/compare/<idA>-vs-<idB>/` (trailing slash), e.g. `/compare/react-vs-vue3/`. Split on the literal `-vs-`.
- **Base URL:** `https://component-party.dev` (no trailing slash in the constant).
- After each task: `pnpm exec svelte-check --tsconfig ./tsconfig.json` must report 0 errors before commit.

---

### Task 1: Bootstrap SvelteKit on Vite+

Stand up an empty SvelteKit app that boots in dev and builds to static output, keeping the content-generation plugin. Validates the riskiest unknown (adapter-static under Vite+) first.

**Files:**

- Modify: `package.json` (deps + scripts)
- Create: `svelte.config.js`
- Delete: `svelte.config.ts` (replaced by `.js`)
- Create: `src/app.html`
- Modify: `vite.config.ts` (swap `svelte()`/inspector/`generateHtmlPagesPlugin` for `sveltekit()`, keep content plugin)
- Modify: `tsconfig.json` (extend SvelteKit generated config)
- Modify: `.gitignore` (add `.svelte-kit`)
- Create: `src/routes/+layout.ts`
- Create: `src/routes/+layout.svelte`
- Create: `src/routes/+page.svelte`
- Modify: `src/app.css` (no change needed; confirm import path)

**Interfaces:**

- Produces: a booting SvelteKit app; `src/routes/+layout.svelte` rendering `{@render children()}`; `vite.config.ts` exporting a Vite+ config with `[pluginGenerateFrameworkContent(), tailwindcss(), sveltekit()]`.

- [ ] **Step 1: Install SvelteKit dependencies**

```bash
pnpm add -D @sveltejs/kit@^2 @sveltejs/adapter-static@^3
# already present: @sveltejs/vite-plugin-svelte, svelte, svelte-check, tailwindcss, @tailwindcss/vite, vite-plus
```

- [ ] **Step 2: Pin the Vite+ toolchain (carry M8 forward)**

In `package.json`, set exact versions (no `latest`/caret on the toolchain):

```jsonc
"vite": "npm:@voidzero-dev/vite-plus-core@0.2.1",
"vite-plus": "0.2.1",
// pnpm.overrides:
"vite": "npm:@voidzero-dev/vite-plus-core@0.2.1",
```

- [ ] **Step 3: Replace package.json scripts**

Replace the `scripts` block with the SvelteKit/Vite+ pattern (keep the content/progress utilities):

```jsonc
"scripts": {
  "dev": "vp dev",
  "build": "vp build",
  "preview": "vp preview",
  "format": "vp fmt",
  "lint": "vp lint",
  "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
  "check:ci": "vp fmt && svelte-kit sync && svelte-check --tsconfig ./tsconfig.json && vp lint",
  "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
  "build:content": "vp node scripts/generateContent.ts --no-cache",
  "build:progress": "vp node scripts/generateReadMeProgress.ts",
  "prepare": "vp config --no-agent && svelte-kit sync || true",
  "test:unit": "vp test",
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui",
  "test:e2e:install": "playwright install chromium",
  "test": "vp test --run && playwright test",
  "check:package-manager": "node scripts/check-package-manager.js"
}
```

Note: `build:sitemap` is removed (replaced by the `/sitemap.xml` endpoint in Task 5).

- [ ] **Step 4: Create `svelte.config.js` (delete the `.ts`)**

```bash
git rm svelte.config.ts
```

```js
// svelte.config.js
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: undefined }),
    alias: { "@frameworks": "./frameworks" },
    prerender: { handleHttpError: "fail", handleMissingId: "fail" },
  },
};

export default config;
```

- [ ] **Step 5: Create `src/app.html`**

Port the static head from `index.html` (everything that is identical across pages: charset, viewport, favicon, manifest, font preload, dns-prefetch, base meta defaults, theme-color, the `@font-face`/`:root` style block, and the static WebApplication JSON-LD). Per-page `<title>`/description/canonical/OG move to route `<svelte:head>` (Tasks 2-4), so DO NOT hardcode them here except as a fallback `<title>`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preload" href="/font/Mona-Sans.woff2" as="font" type="font/woff2" crossorigin="" />

    <link rel="dns-prefetch" href="//github.com" />
    <link rel="dns-prefetch" href="//codesandbox.io" />
    <link rel="dns-prefetch" href="//play.vuejs.org" />
    <link rel="dns-prefetch" href="//svelte.dev" />
    <link rel="dns-prefetch" href="//playground.solidjs.com" />
    <link rel="dns-prefetch" href="//qwik.builder.io" />
    <link rel="dns-prefetch" href="//lit.dev" />
    <link rel="dns-prefetch" href="//ember-twiddle.com" />
    <link rel="dns-prefetch" href="//markojs.com" />
    <link rel="dns-prefetch" href="//stackblitz.com" />
    <link rel="dns-prefetch" href="//www.ripplejs.com" />
    <link rel="preconnect" href="https://github.com" crossorigin />
    <link rel="preconnect" href="https://codesandbox.io" crossorigin />

    <meta name="author" content="Component Party" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <meta name="theme-color" content="#111827" />
    <meta name="apple-mobile-web-app-title" content="Component Party" />
    <meta name="application-name" content="Component Party" />
    <meta name="format-detection" content="telephone=no" />

    <style>
      @font-face {
        font-family: "Mona Sans";
        src:
          url("/font/Mona-Sans.woff2") format("woff2 supports variations"),
          url("/font/Mona-Sans.woff2") format("woff2-variations");
        font-weight: 400 500 600 700 800;
        font-stretch: 75% 125%;
        font-display: swap;
      }
      :root {
        --bg-color: rgb(17 24 39);
        color-scheme: dark;
      }
      html {
        font-family: "Mona Sans";
        background-color: var(--bg-color);
        color: #fff;
      }
    </style>

    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div id="app" class="min-h-screen">%sveltekit.body%</div>
  </body>
</html>
```

- [ ] **Step 6: Move static assets into `static/`**

```bash
mkdir -p static
git mv public/* static/ 2>/dev/null || (cp -r public/* static/ && git rm -r public)
# Confirm font/, popper.svg, favicon.png, manifest.json, banner2.png, _headers moved.
# DELETE static/sitemap.xml and static/_redirects — regenerated in Task 5.
git rm -f static/sitemap.xml static/_redirects 2>/dev/null || true
```

- [ ] **Step 7: Rewrite `vite.config.ts` (keep content plugin, drop SPA shell plugins)**

```ts
import { defineConfig } from "vite-plus";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";

export default defineConfig({
  plugins: [pluginGenerateFrameworkContent(), tailwindcss(), sveltekit()],
  build: {
    minify: "terser",
    terserOptions: { compress: { drop_console: true, drop_debugger: true } },
    sourcemap: false,
  },
  lint: {
    plugins: ["typescript", "unicorn"],
    jsPlugins: ["eslint-plugin-svelte"],
    categories: { correctness: "off" },
    env: { builtin: true, browser: true, node: true },
  },
  fmt: {
    svelte: true,
    ignorePatterns: ["content/**", "src/generatedContent/**", ".svelte-kit/**"],
  },
  staged: {
    "*.{js,ts,svelte,html,md,css}": "vp fmt --write",
    "content/**/*": "sh -c 'vp node scripts/generateReadMeProgress.ts && git add README.md'",
  },
  test: { include: ["src/**/*.{test,spec}.{js,ts}"] },
});
```

Removed vs. current: `resolve.alias` (moved to `kit.alias`), `svelte()`, `svelteInspector()`, `generateHtmlPagesPlugin(...)`, `optimizeDeps`, `build.rollupOptions.external`, `build.target`. Also delete the now-dead `generateHtmlPagesPlugin`/`filePathToUrl`/`footerNavigation`/`templateDataDefaults`/Eta/htmlMinify code from this file (footer moves to a component in Task 2).

- [ ] **Step 8: Update `tsconfig.json` to extend SvelteKit's generated config**

```jsonc
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler",
  },
}
```

- [ ] **Step 9: Add `.svelte-kit` to `.gitignore`**

Append `\n.svelte-kit\n` to `.gitignore`.

- [ ] **Step 10: Create minimal routes**

```ts
// src/routes/+layout.ts
export const prerender = true;
export const trailingSlash = "always";
```

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

{@render children()}
```

```svelte
<!-- src/routes/+page.svelte --><h1>Component Party — SvelteKit bootstrap OK</h1>
```

- [ ] **Step 11: Sync SvelteKit and verify type check**

Run: `pnpm run check`
Expected: `svelte-kit sync` generates `.svelte-kit/`, then svelte-check reports 0 errors.

- [ ] **Step 12: Verify dev boot**

Run: `pnpm run dev` (then stop). Expected: server starts, `/` shows the bootstrap heading, no console errors about Vite/adapter.

- [ ] **Step 13: Verify static build (the key risk gate)**

Run: `pnpm run build`
Expected: build completes; `build/` (SvelteKit default output dir) or configured output contains `index.html` with real `<h1>` text (not an empty div). If the output dir collides with the repo's existing `build/` source folder, set `kit.outDir`/adapter `pages` to `dist` — adjust and re-run.

> Note: the repo already has a `build/` directory for source (`build/lib`, `build/template`). adapter-static defaults to `build/`. To avoid collision, configure the adapter to output to `dist`: `adapter({ pages: "dist", assets: "dist", fallback: undefined })`. Apply this in `svelte.config.js` and re-run.

- [ ] **Step 14: Commit**

```bash
git add -A
git commit -m "feat(kit): bootstrap SvelteKit on Vite+ with adapter-static"
```

---

### Task 2: App shell (layout, Header, Footer)

Build the persistent shell: Header and Footer as components, footer navigation data as a module, and the base/JSON-LD head in the layout.

**Files:**

- Create: `src/lib/components/Header.svelte` (from `src/components/Header.svelte`)
- Create: `src/lib/components/GithubStarButton.svelte` (from `src/components/GithubStarButton.svelte`)
- Create: `src/lib/components/Footer.svelte` (from `build/template/footer.html`)
- Create: `src/lib/footerNavigation.ts` (from the `footerNavigation` array in old `vite.config.ts`)
- Create: `src/lib/frameworkUrl.ts` (URL helpers, used here and in Task 4)
- Modify: `src/routes/+layout.svelte` (render Header/Footer, base head)
- Test: `src/lib/frameworkUrl.test.ts`

**Interfaces:**

- Produces:
  - `src/lib/frameworkUrl.ts`:
    - `createComparisonPath(idA: string, idB: string): string` → `"/compare/<idA>-vs-<idB>/"`
    - `parseComparison(param: string): [string, string] | null` → canonical ids or null if invalid
    - `createSearchParamUrl(ids: string[]): string` → `"/?f=<ids joined by ->"`
    - `BASE_URL = "https://component-party.dev"`
  - `src/lib/footerNavigation.ts`: `export const footerNavigation: { title: string; links: { name: string; url: string }[] }[]`
  - `src/lib/components/Footer.svelte`, `Header.svelte`.

- [ ] **Step 1: Write failing test for `frameworkUrl` helpers**

```ts
// src/lib/frameworkUrl.test.ts
import { describe, it, expect } from "vitest";
import { createComparisonPath, parseComparison } from "./frameworkUrl";

describe("frameworkUrl", () => {
  it("builds a canonical comparison path", () => {
    expect(createComparisonPath("react", "vue3")).toBe("/compare/react-vs-vue3/");
  });
  it("parses a valid comparison param to canonical ids", () => {
    expect(parseComparison("react-vs-vue3")).toEqual(["react", "vue3"]);
  });
  it("maps a name alias to the latest stable id", () => {
    expect(parseComparison("react-vs-vue")).toEqual(["react", "vue3"]);
  });
  it("returns null for an unknown framework", () => {
    expect(parseComparison("react-vs-nope")).toBeNull();
  });
  it("returns null when not exactly two parts", () => {
    expect(parseComparison("react")).toBeNull();
    expect(parseComparison("a-vs-b-vs-c")).toBeNull();
  });
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `pnpm exec vitest run src/lib/frameworkUrl.test.ts`
Expected: FAIL — `Cannot find module './frameworkUrl'`.

- [ ] **Step 3: Implement `src/lib/frameworkUrl.ts`**

```ts
import { matchFrameworkId } from "@frameworks";
import { FRAMEWORK_SEPARATOR, FRAMEWORK_IDS_FROM_URL_KEY } from "./constants";

export const BASE_URL = "https://component-party.dev";
const COMPARISON_SEPARATOR = "-vs-";

export function parseComparison(param: string): [string, string] | null {
  const parts = param.split(COMPARISON_SEPARATOR);
  if (parts.length !== 2) return null;
  const a = matchFrameworkId(parts[0]);
  const b = matchFrameworkId(parts[1]);
  if (!a || !b) return null;
  return [a.id, b.id];
}

export function createComparisonPath(idA: string, idB: string): string {
  return `/compare/${idA}${COMPARISON_SEPARATOR}${idB}/`;
}

export function createSearchParamUrl(ids: string[]): string {
  return `/?${FRAMEWORK_IDS_FROM_URL_KEY}=${ids.join(FRAMEWORK_SEPARATOR)}`;
}
```

Note: move `src/constants.ts` to `src/lib/constants.ts` in this step (`git mv src/constants.ts src/lib/constants.ts`) and update its importers; `frameworkUrl.ts` imports from `./constants`.

- [ ] **Step 4: Run test, verify it passes**

Run: `pnpm exec vitest run src/lib/frameworkUrl.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Create `src/lib/footerNavigation.ts`**

Copy the entire `footerNavigation` array from the old `vite.config.ts` (lines 17-96) into this module, replacing the inline `createFrameworkUrl` with the new helper:

```ts
import { createSearchParamUrl } from "./frameworkUrl";

const u = (ids: string[]) => createSearchParamUrl(ids);

export const footerNavigation: { title: string; links: { name: string; url: string }[] }[] = [
  // ... paste the full array, replacing createFrameworkUrl([...]) with u([...]) ...
];
```

(Reproduce every entry from the original array — do not summarize.)

- [ ] **Step 6: Create `src/lib/components/Footer.svelte` from `build/template/footer.html`**

Read `build/template/footer.html`, translate the Eta template (`it.navigations`) into a Svelte component consuming `footerNavigation`:

```svelte
<script lang="ts">
  import { footerNavigation } from "$lib/footerNavigation";
</script>

<!-- port footer.html markup; replace Eta loops with {#each footerNavigation as group} / {#each group.links as link} -->
```

- [ ] **Step 7: Move Header + GithubStarButton into `src/lib/components/`**

```bash
git mv src/components/Header.svelte src/lib/components/Header.svelte
git mv src/components/GithubStarButton.svelte src/lib/components/GithubStarButton.svelte
```

In `Header.svelte`, fix the import path to `./GithubStarButton.svelte` (unchanged) and keep `<h1>Component Party</h1>` as the site brand. (Per finding F14, only one h1 per page — the brand h1 is acceptable; the comparison pages will not add a competing h1.)

- [ ] **Step 8: Wire the layout shell + base JSON-LD head**

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <!-- static WebApplication JSON-LD ported verbatim from old index.html -->
  {@html `<script type="application/ld+json">${JSON.stringify(WEBAPP_JSONLD)}</script>`}
</svelte:head>

<Header />
{@render children()}
<Footer />
```

Define `WEBAPP_JSONLD` in `src/lib/seo.ts` as the object from old `index.html` lines 84-154 (drop the Eta `<%= %>` and use literal strings; keep dates as-is — F27 is out of scope). Import it into the layout.

- [ ] **Step 9: Type check + dev smoke**

Run: `pnpm run check` → 0 errors.
Run: `pnpm run dev`, confirm Header + Footer render on `/`.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat(kit): app shell — layout, Header, Footer, frameworkUrl helpers"
```

---

### Task 3: Extract `Comparison.svelte` and reach home parity

Move the SPA's core into a reusable component and render it on `/` with full parity (default selection, `?f=`, localStorage, bonus frameworks, loading/error/missing states, playground, copy).

**Files:**

- Create: `src/lib/components/Comparison.svelte` (from `src/Index.svelte`)
- Move: `src/components/{Aside,CodeEditor,FrameworkLabel,TransitionWithClass}.svelte` → `src/lib/components/`
- Move: `src/lib/{copyToClipboard,createLocaleStorage}.ts` (already under `src/lib`, keep)
- Modify: `src/routes/+page.svelte`
- Create: `src/routes/+page.ts`
- Delete: `src/Index.svelte`, `src/App.svelte`, `src/router.ts`, `src/main.ts`

**Interfaces:**

- Consumes: `src/lib/frameworkUrl.ts`, `src/lib/constants.ts`, generatedContent imports.
- Produces: `src/lib/components/Comparison.svelte` with props:

  ```ts
  interface Props {
    initialFrameworkIds: string[];
    persist?: boolean;
  }
  ```

  `persist` defaults to `true` (home reads/writes localStorage); comparison pages pass `persist={false}` so a pair URL is authoritative and does not clobber the visitor's saved selection.

- [ ] **Step 1: Move the dependent components into `src/lib/components/`**

```bash
git mv src/components/Aside.svelte src/lib/components/Aside.svelte
git mv src/components/CodeEditor.svelte src/lib/components/CodeEditor.svelte
git mv src/components/FrameworkLabel.svelte src/lib/components/FrameworkLabel.svelte
git mv src/components/TransitionWithClass.svelte src/lib/components/TransitionWithClass.svelte
```

Update any relative imports inside these files (e.g. `CodeEditor.svelte` imports `../lib/copyToClipboard.ts` → `$lib/copyToClipboard`). Check `Aside.svelte` for imports of generatedContent/constants and repoint to `$lib`/relative.

- [ ] **Step 2: Create `src/lib/components/Comparison.svelte` from `src/Index.svelte`**

Copy the ENTIRE current `src/Index.svelte` into `Comparison.svelte` with these precise changes:

1. Replace the imports of `./components/X` with `$lib/components/X`, `./lib/X` with `$lib/X`, `./constants.ts` with `$lib/constants`.
2. Replace `import { searchParams } from "sv-router"` and `import { navigate } from "./router.ts"` with SvelteKit equivalents:
   ```ts
   import { page } from "$app/state";
   import { goto } from "$app/navigation";
   import { browser } from "$app/environment";
   ```
3. Add props at the top of `<script>`:
   ```ts
   interface Props {
     initialFrameworkIds: string[];
     persist?: boolean;
   }
   let { initialFrameworkIds, persist = true }: Props = $props();
   ```
4. Replace the constant `DEFAULT_FRAMEWORKS` usage in `onInit` with `initialFrameworkIds` (the route supplies it).
5. Replace `searchParams.get(FRAMEWORK_IDS_FROM_URL_KEY)` with `page.url.searchParams.get(FRAMEWORK_IDS_FROM_URL_KEY)`.
6. Replace `navigateWithFrameworkSelection()`'s `searchParams.set/delete` with `goto` updating the query (only in the browser):
   ```ts
   async function navigateWithFrameworkSelection() {
     if (!browser) return;
     const url = new URL(page.url);
     if (frameworkIdsSelected.size === 0) url.searchParams.delete(FRAMEWORK_IDS_FROM_URL_KEY);
     else
       url.searchParams.set(
         FRAMEWORK_IDS_FROM_URL_KEY,
         frameworkIdsSelectedArr.join(FRAMEWORK_SEPARATOR),
       );
     await goto(url, { replaceState: true, keepFocus: true, noScroll: true });
   }
   ```
7. Gate localStorage reads/writes behind `persist && browser` (the `frameworkIdsStorage` get/set calls in `onInit` and the toggle handler).
8. Replace the bare `onInit()` call (runs during setup, finding M5) with an `$effect` that runs once on mount, using `{ replaceState: true }` semantics already in step 6.
9. Move the `<svelte:head>` block (title/description/OG) OUT of this component — the routes own per-page head (Task 4). Keep only the rendering markup here.
10. KEEP the M1 `normalizeFrameworkIds` helper and importer guard (present after the prerequisite rebase).

> This is a move + targeted edits, not a rewrite. Validate with the Svelte autofixer MCP tool on the resulting file before committing.

- [ ] **Step 3: Create `src/routes/+page.ts` (home)**

```ts
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
  return { frameworkIds: ["react", "svelte5"] };
};
```

- [ ] **Step 4: Create home `src/routes/+page.svelte`**

```svelte
<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL } from "$lib/frameworkUrl";
  let { data } = $props();
</script>

<svelte:head>
  <title>Component Party</title>
  <meta
    name="description"
    content="Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks."
  />
  <link rel="canonical" href={`${BASE_URL}/`} />
  <meta property="og:url" content={`${BASE_URL}/`} />
  <meta property="og:title" content="Component Party" />
</svelte:head>

<Comparison initialFrameworkIds={data.frameworkIds} persist={true} />
```

- [ ] **Step 5: Delete the old SPA entrypoints**

```bash
git rm src/Index.svelte src/App.svelte src/router.ts src/main.ts
```

- [ ] **Step 6: Type check**

Run: `pnpm run check`
Expected: 0 errors. Fix any remaining `sv-router`/old-path import errors.

- [ ] **Step 7: Dev parity smoke**

Run: `pnpm run dev`. Verify on `/`: default React + Svelte 5 columns render with highlighted code; toggling a framework updates `?f=`; reload keeps selection (localStorage); `?f=react-vue3-svelte5` selects three; show-more reveals bonus frameworks; copy button works; playground link present.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(kit): extract Comparison component, home route at parity"
```

---

### Task 4: Prerendered `/compare/[comparison]` pages

Add real, prerendered, canonical 2-framework comparison pages.

**Files:**

- Create: `src/routes/compare/[comparison]/+page.ts`
- Create: `src/routes/compare/[comparison]/+page.svelte`
- Create: `src/lib/comparisonPairs.ts` (canonical pair enumeration, shared with sitemap/redirects)

**Interfaces:**

- Produces:
  - `src/lib/comparisonPairs.ts`:
    - `canonicalPairs(): [string, string][]` → all 153 unordered pairs, each `[idA, idB]` with idA earlier in `frameworks`.
  - Route `load` returns `{ frameworkIds: [string, string]; titleA: string; titleB: string }`.

- [ ] **Step 1: Write failing test for `canonicalPairs`**

```ts
// src/lib/comparisonPairs.test.ts
import { describe, it, expect } from "vitest";
import { frameworks } from "@frameworks";
import { canonicalPairs } from "./comparisonPairs";

describe("canonicalPairs", () => {
  const pairs = canonicalPairs();
  it("produces C(n,2) unordered pairs", () => {
    const n = frameworks.length;
    expect(pairs.length).toBe((n * (n - 1)) / 2);
  });
  it("orders each pair by framework array position (canonical)", () => {
    const index = new Map(frameworks.map((f, i) => [f.id, i]));
    for (const [a, b] of pairs) expect(index.get(a)!).toBeLessThan(index.get(b)!);
  });
  it("has no duplicates", () => {
    const keys = new Set(pairs.map(([a, b]) => `${a}|${b}`));
    expect(keys.size).toBe(pairs.length);
  });
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `pnpm exec vitest run src/lib/comparisonPairs.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `src/lib/comparisonPairs.ts`**

```ts
import { frameworks } from "@frameworks";

export function canonicalPairs(): [string, string][] {
  const ids = frameworks.map((f) => f.id);
  const pairs: [string, string][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push([ids[i], ids[j]]);
    }
  }
  return pairs;
}
```

- [ ] **Step 4: Run test, verify it passes**

Run: `pnpm exec vitest run src/lib/comparisonPairs.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Create `src/routes/compare/[comparison]/+page.ts`**

```ts
import { error } from "@sveltejs/kit";
import { matchFrameworkId } from "@frameworks";
import { parseComparison } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";
import { createComparisonPath } from "$lib/frameworkUrl";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  canonicalPairs().map(([a, b]) => ({ comparison: `${a}-vs-${b}` }));

export const load: PageLoad = ({ params }) => {
  const ids = parseComparison(params.comparison);
  if (!ids) error(404, "Unknown framework comparison");
  const [a, b] = ids;
  const fa = matchFrameworkId(a)!;
  const fb = matchFrameworkId(b)!;
  // Canonical guard: the path must already be in canonical order.
  if (createComparisonPath(a, b) !== `/compare/${params.comparison}/`) {
    error(404, "Non-canonical comparison");
  }
  return { frameworkIds: [a, b] as [string, string], titleA: fa.title, titleB: fb.title };
};
```

> Canonical order at prerender time is guaranteed by `entries()`. The inverse (`b-vs-a`) is handled by `_redirects` (Task 5), not by this route, so the guard returns 404 for non-canonical input rather than rendering a duplicate.

- [ ] **Step 6: Create `src/routes/compare/[comparison]/+page.svelte`**

```svelte
<script lang="ts">
  import Comparison from "$lib/components/Comparison.svelte";
  import { BASE_URL, createComparisonPath } from "$lib/frameworkUrl";
  let { data } = $props();
  const canonical = $derived(
    `${BASE_URL}${createComparisonPath(data.frameworkIds[0], data.frameworkIds[1])}`,
  );
  const title = $derived(`${data.titleA} vs ${data.titleB} - Component Party`);
  const description = $derived(
    `Compare ${data.titleA} vs ${data.titleB} frameworks side-by-side. See syntax differences, features, and code examples for ${data.titleA} and ${data.titleB}.`,
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>

<Comparison initialFrameworkIds={data.frameworkIds} persist={false} />
```

- [ ] **Step 7: Type check + dev smoke**

Run: `pnpm run check` → 0 errors.
Run: `pnpm run dev`, open `/compare/react-vs-vue3/` → React + Vue 3 columns render; `<title>` is "React vs Vue 3 - Component Party"; open `/compare/nope-vs-react/` → 404.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(kit): prerendered /compare/[comparison] pages with canonical meta"
```

---

### Task 5: Sitemap endpoint, `_redirects` generation, dead-code removal

Emit a sitemap of real URLs, redirect inverse pairs to canonical, and delete the old SPA shell machinery.

**Files:**

- Create: `src/routes/sitemap.xml/+server.ts`
- Create: `scripts/generateRedirects.ts` (writes `static/_redirects`)
- Modify: `package.json` (add `build:redirects`; ensure it runs before build, or generate in the content plugin)
- Delete: `scripts/generateSitemap.ts`, `index.html`, `build/template/footer.html`
- Modify: `build/lib/generateContent.ts` if it currently writes `_redirects` (move that logic into `scripts/generateRedirects.ts`)

**Interfaces:**

- Consumes: `canonicalPairs()`, `createComparisonPath`, `BASE_URL`.
- Produces: prerendered `/sitemap.xml`; `static/_redirects` with 153 inverse→canonical 301s.

- [ ] **Step 1: Create the sitemap endpoint**

```ts
// src/routes/sitemap.xml/+server.ts
import { BASE_URL, createComparisonPath } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";

export const prerender = true;

export function GET() {
  const urls = [
    `${BASE_URL}/`,
    ...canonicalPairs().map(([a, b]) => `${BASE_URL}${createComparisonPath(a, b)}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
```

- [ ] **Step 2: Verify sitemap in dev**

Run: `pnpm run dev`, open `/sitemap.xml` → XML lists `/` + 153 `/compare/a-vs-b/` URLs, all with `-vs-` and canonical order.

- [ ] **Step 3: Create `scripts/generateRedirects.ts`**

```ts
import fs from "node:fs/promises";
import path from "node:path";
import { canonicalPairs } from "../src/lib/comparisonPairs.ts";

const lines = canonicalPairs().map(([a, b]) => `/compare/${b}-vs-${a}/ /compare/${a}-vs-${b}/ 301`);
const out = path.join(import.meta.dirname, "..", "static", "_redirects");
await fs.writeFile(out, lines.join("\n") + "\n", "utf8");
console.log(`Generated _redirects with ${lines.length} inverse redirects at ${out}`);
```

Add to `package.json` scripts: `"build:redirects": "vp node scripts/generateRedirects.ts"`, and prepend it to `build`: `"build": "vp node scripts/generateRedirects.ts && vp build"` (or call it from the content plugin's setup). `static/_redirects` is generated output — add it to `.gitignore`.

- [ ] **Step 4: Run redirect generation, verify output**

Run: `pnpm run build:redirects`
Expected: `static/_redirects` exists with 153 lines like `/compare/vue3-vs-react/ /compare/react-vs-vue3/ 301`.

- [ ] **Step 5: Remove dead SPA-shell code**

```bash
git rm scripts/generateSitemap.ts index.html build/template/footer.html
```

If `build/lib/generateContent.ts` writes its own `_redirects` (it logged "Generated \_redirects file for Cloudflare Pages with 306 redirects"), remove that block from it — `scripts/generateRedirects.ts` is now the single source. Verify content generation still succeeds:
Run: `pnpm run build:content` → "Content generation completed successfully!".

- [ ] **Step 6: Remove now-unused dependencies**

Check for remaining importers, then drop deps that are no longer referenced:

```bash
grep -rE "sv-router|from \"eta\"|html-minifier-terser" src/ build/ scripts/ vite.config.ts || echo "none"
pnpm remove sv-router eta html-minifier-terser @types/html-minifier-terser
```

(Only remove a package if the grep shows no remaining importers.)

- [ ] **Step 7: Type check + full build**

Run: `pnpm run check` → 0 errors.
Run: `pnpm run build` → completes; output dir contains `compare/react-vs-vue3/index.html`, `sitemap.xml`, and `_redirects`.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(kit): sitemap endpoint + inverse-pair redirects; remove SPA shell"
```

---

### Task 6: Tests and final validation

Adapt the e2e suite to real routes and prove C1 is fixed (content in static HTML).

**Files:**

- Modify: `test/e2e/framework-comparison.test.ts`
- Modify: `test/e2e/home.test.ts`, `test/e2e/integration.test.ts`, `test/e2e/utils/test-helpers.ts`
- Modify: `playwright.config.ts` (webServer command/port for SvelteKit preview)
- Create: `test/prerender.test.ts` (Vitest, asserts built HTML contains snippet code)

**Interfaces:**

- Consumes: built output dir from `pnpm run build`.

- [ ] **Step 1: Point Playwright at the SvelteKit preview**

In `playwright.config.ts`, set `webServer.command` to `"pnpm run build && pnpm run preview --port 4144"`, `webServer.timeout: 180_000`, `webServer.port: 4144`, `use.baseURL: "http://localhost:4144"`. (Confirm `vp preview` honors `--port`; if not, use the port from svelte.config/preview config.)

- [ ] **Step 2: Update the versus-mode e2e test to use the real route**

```ts
test("should display versus mode for a comparison URL", async ({ page }) => {
  await page.goto("/compare/react-vs-vue3/");
  await expect(page).toHaveTitle(/React vs Vue/);
  const selected = await page.getAttribute(
    "[data-framework-id-selected-list]",
    "data-framework-id-selected-list",
  );
  expect(selected).toContain("react");
  expect(selected).toContain("vue3");
});
```

Update the other tests in the file/suite that used `?f=react-vue3` to either keep `?f=` on `/` (valid — home still supports it) or use `/compare/...`. Keep the error-loading test (already fixed on main: `**/angular-*.js` + assert `error-snippet-angular`).

- [ ] **Step 3: Run e2e, verify pass**

Run: `pnpm run test:e2e`
Expected: PASS. Fix selectors/timing if needed (web-first assertions, no `waitForTimeout`).

- [ ] **Step 4: Write the prerender proof test**

```ts
// test/prerender.test.ts
import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = resolve(import.meta.dirname, "..", "dist"); // adapter output dir

describe("prerender (C1)", () => {
  it("bakes real snippet code into the static comparison HTML", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    // Section/snippet titles are server-rendered, not just an empty app div.
    expect(html).toContain("Declare state"); // a known snippet title
    expect(html).not.toMatch(/<div id="app"[^>]*>\s*<\/div>/);
    // Highlighted code is present (Shiki output class).
    expect(html).toContain("shiki");
  });

  it("includes the canonical comparison URL", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain(
      'rel="canonical" href="https://component-party.dev/compare/react-vs-vue3/"',
    );
  });
});
```

Adjust `OUT` and the asserted strings to the real output dir and an actual section title from `src/generatedContent/tree.js`.

- [ ] **Step 5: Run prerender test after a build**

Run: `pnpm run build && pnpm exec vitest run test/prerender.test.ts`
Expected: PASS — proves the corpus is in the static HTML.

- [ ] **Step 6: Full validation sweep**

Run each, expect success:

- `pnpm run check` (svelte-check, 0 errors)
- `pnpm run lint` (`vp lint`, exit 0)
- `pnpm run test:unit` (vitest: frameworkUrl, comparisonPairs, prerender, existing)
- `pnpm run build` (static output)

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "test(kit): route-based e2e + prerender proof for C1"
```

- [ ] **Step 8: Update CI (carry M13 forward + add prerender test)**

In `.github/workflows/ci.yml`, ensure steps run: `pnpm run build`, `pnpm run check:ci`, `pnpm run test:unit`, `pnpm run test:e2e:install`, `pnpm run test:e2e`. Commit: `"ci(kit): run unit + e2e on SvelteKit build"`.

---

## Self-Review

**Spec coverage:**

- §3.1 build/config → Task 1 (svelte.config, vite.config, app.html, package.json). ✓
- §3.2 routes → Tasks 2-5 (layout, home, compare, sitemap). ✓
- §3.3 component reuse → Tasks 2-3 (Header/Footer/Comparison + lib moves). ✓
- §3.4 param mapping → Task 4 (`parseComparison`, `entries`, 404) + Task 5 (`_redirects` inverse). ✓
- §3.5 SEO → Task 3/4 (`<svelte:head>` per route), Task 5 (sitemap). ✓
- §4 deletions → Task 3 (SPA entrypoints), Task 5 (shell/scripts/deps). ✓
- §5 sequencing → Tasks 1-6 mirror the 5 phases + tests. ✓
- §6 tests → Task 6 (e2e routes, prerender proof, unit). ✓
- §7 risks → Task 1 Step 13 (adapter/output-dir collision), Step 13 note (build dir). ✓
- §8 success criteria → Task 6 validation sweep + prerender test. ✓

**Placeholder scan:** The two move-heavy steps (Task 2 Step 5 footerNavigation, Task 3 Step 2 Comparison) reference existing source to copy rather than reproducing hundreds of lines verbatim; both give exact source locations and the exact deltas. All new files have complete code. No "TBD"/"add error handling"/vague steps.

**Type consistency:** `parseComparison` returns `[string,string]|null` (used in Task 4 load + Task 2 test); `createComparisonPath(idA,idB)` used in Tasks 2/4/5; `canonicalPairs()` returns `[string,string][]` used in Tasks 4/5; `Comparison` props `{initialFrameworkIds, persist}` consistent across home (Task 3) and compare (Task 4). Output dir `dist` consistent (Task 1 note → Task 6).

**Open risk flagged for executor:** adapter-static output directory collides with the repo's source `build/` folder; Task 1 resolves it by configuring the adapter to output `dist`. If any step finds `vp preview`/`vp build` use a different dir, update `OUT` in Task 6 and the adapter config together.
