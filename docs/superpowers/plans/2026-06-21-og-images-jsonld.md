# OG Images + Per-Page JSON-LD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate a per-comparison Open Graph image (1200×630 PNG) at build time and emit page-appropriate JSON-LD (WebApplication on home, TechArticle on each `/compare/` page) with non-stale dates.

**Architecture:** A build-only renderer (`satori` → SVG, `@resvg/resvg-js` → PNG) is exposed through a prerendered SvelteKit endpoint `src/routes/og/[comparison].png/+server.ts` whose `entries()` enumerates the 153 canonical pairs, producing `dist/og/<a>-vs-<b>.png`. Each compare page references its own OG image and a TechArticle JSON-LD; the home page carries a cleaned WebApplication JSON-LD. Build date is injected via a Vite `define` global.

**Tech Stack:** SvelteKit 2 on Vite+, `satori`, `@resvg/resvg-js`, Svelte 5 runes, Vitest.

## Global Constraints

- Keep Vite+ (`vite` aliased to `@voidzero-dev/vite-plus-core` 0.2.1). Never reintroduce standard `vite`.
- Svelte 5 runes only; SvelteKit 2 APIs.
- OG image: 1200×630, background `#111827`, white text. Layout: two framework logos flanking a muted `vs`, framework titles below each logo, `Component Party` (with `popper.svg` mark, NOT an emoji) footer.
- OG image URL = `${BASE_URL}/og/<a>-vs-<b>.png` where `<a>`,`<b>` are canonical ids (a earlier in the `frameworks` array). `BASE_URL = "https://component-party.dev"`.
- Canonical pair order = order of the `frameworks` array (reuse `canonicalPairs()` from `src/lib/comparisonPairs.ts`).
- JSON-LD: `datePublished` = `SITE_PUBLISHED_DATE = "2024-01-01"`; `dateModified` = build date. WebApplication has NO `ItemList`/`mainEntity`. No `2024-12-01` anywhere after this work.
- Output dir is `dist` (adapter-static `pages`/`assets`).
- After each task: `pnpm exec svelte-check --tsconfig ./tsconfig.json` reports 0 errors before commit.
- Font for satori must be TTF/OTF/WOFF (NOT woff2). Primary: Mona Sans static TTF (Regular+Bold) committed under `build/og/fonts/`. Deterministic fallback if unavailable: `@fontsource/inter` `.woff` (400/700).

---

### Task 1: Build infrastructure — deps, font asset, build-date global

Install the rendering deps, provide a satori-compatible font, and wire a build-date constant. No image rendering yet.

**Files:**

- Modify: `package.json` (deps, `onlyBuiltDependencies`)
- Create: `build/og/fonts/Mona-Sans-Regular.ttf`, `build/og/fonts/Mona-Sans-Bold.ttf` (or the Inter fallback — see Step 2)
- Create: `build/og/fonts/README.md` (provenance + license note)
- Modify: `vite.config.ts` (add `define`)
- Create: `src/lib/buildDate.ts`
- Modify: `src/vite-env.d.ts` (declare the `__BUILD_DATE__` global)

**Interfaces:**

- Produces:
  - `src/lib/buildDate.ts`: `export const BUILD_DATE: string` (a `YYYY-MM-DD` string, build date or `SITE_PUBLISHED_DATE` fallback).
  - Font files at `build/og/fonts/` consumed by Task 2.
  - Global `__BUILD_DATE__: string` available in app code.

- [ ] **Step 1: Install rendering dependencies**

```bash
pnpm add -D satori @resvg/resvg-js
```

If install fails for an ENVIRONMENT reason (network/native binary), report BLOCKED with the exact command + error — do not work around. `@resvg/resvg-js` ships prebuilt binaries; if pnpm refuses its build script, add it to `pnpm.onlyBuiltDependencies` in `package.json` (alongside `esbuild`) and re-install.

- [ ] **Step 2: Provide a satori-compatible font**

Primary (brand): download Mona Sans **static** TTFs (OFL) and place them:

```bash
mkdir -p build/og/fonts
# from the official github/mona-sans release (static TTF weights):
#   Mona-Sans-Regular.ttf  -> build/og/fonts/Mona-Sans-Regular.ttf
#   Mona-Sans-Bold.ttf     -> build/og/fonts/Mona-Sans-Bold.ttf
```

If the download is unavailable in this environment OR only a variable TTF is available (satori needs static weights), use the deterministic fallback:

```bash
pnpm add -D @fontsource/inter
cp node_modules/@fontsource/inter/files/inter-latin-400-normal.woff build/og/fonts/font-400.woff
cp node_modules/@fontsource/inter/files/inter-latin-700-normal.woff build/og/fonts/font-700.woff
```

Whichever you use, the font family name passed to satori in Task 2 must match (`"Mona Sans"` for the TTFs, `"Inter"` for the fallback). Record which you used in your report. Write `build/og/fonts/README.md` noting the source + license.

- [ ] **Step 3: Inject build date via Vite `define`**

In `vite.config.ts`, add a top-level constant and a `define` entry:

```ts
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
```

and inside `defineConfig({ ... })` add:

```ts
  define: { __BUILD_DATE__: JSON.stringify(BUILD_DATE) },
```

(`new Date()` is fine here — vite.config runs in Node.)

- [ ] **Step 4: Declare the global type**

Append to `src/vite-env.d.ts`:

```ts
declare const __BUILD_DATE__: string;
```

- [ ] **Step 5: Create `src/lib/buildDate.ts`**

```ts
import { SITE_PUBLISHED_DATE } from "./seo";

// __BUILD_DATE__ is replaced at build time by Vite `define` (see vite.config.ts).
// Falls back to the publish date if the define is absent (e.g. unit-test context).
export const BUILD_DATE: string =
  typeof __BUILD_DATE__ === "string" ? __BUILD_DATE__ : SITE_PUBLISHED_DATE;
```

> Note: `SITE_PUBLISHED_DATE` is added to `src/lib/seo.ts` in Task 4. To keep Task 1 self-contained and type-checkable, add `export const SITE_PUBLISHED_DATE = "2024-01-01";` to the top of `src/lib/seo.ts` now (Task 4 builds the rest on it).

- [ ] **Step 6: Verify**

Run: `pnpm run check`
Expected: 0 errors.
Run: `node -e "console.log(require('@resvg/resvg-js') && 'resvg ok')"` (or an equivalent import smoke) — confirms the native module loads. Expected: `resvg ok` (or note BLOCKED if it throws for env reasons).

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml build/og/fonts vite.config.ts src/vite-env.d.ts src/lib/buildDate.ts src/lib/seo.ts
git commit -m "build(og): add satori/resvg deps, build-only font, build-date global"
```

---

### Task 2: OG image renderer (TDD)

A pure build-side function that renders one comparison card to a PNG buffer. Logos are rasterized SVG→PNG first (resvg renders standalone SVG cleanly; satori embeds raster images reliably, avoiding nested-SVG limitations).

**Files:**

- Create: `build/og/renderOgImage.ts`
- Test: `build/og/renderOgImage.test.ts`

**Interfaces:**

- Consumes: font files from Task 1; framework SVGs at `static/framework/<x>.svg`.
- Produces: `export async function renderComparisonOgPng(opts: { titleA: string; titleB: string; imgA: string; imgB: string }): Promise<Uint8Array>` where `imgA`/`imgB` are paths relative to `static/` (e.g. `"framework/react.svg"`).

- [ ] **Step 1: Write the failing test**

```ts
// build/og/renderOgImage.test.ts
import { describe, it, expect } from "vitest";
import { renderComparisonOgPng } from "./renderOgImage";

describe("renderComparisonOgPng", () => {
  it("renders a PNG buffer for a comparison", async () => {
    const png = await renderComparisonOgPng({
      titleA: "React",
      titleB: "Svelte 5",
      imgA: "framework/react.svg",
      imgB: "framework/svelte.svg",
    });
    // PNG magic number: 89 50 4E 47
    expect(png[0]).toBe(0x89);
    expect(png[1]).toBe(0x50);
    expect(png[2]).toBe(0x4e);
    expect(png[3]).toBe(0x47);
    expect(png.length).toBeGreaterThan(1000);
  });
});
```

- [ ] **Step 2: Run test, verify it fails**

Run: `pnpm exec vitest run build/og/renderOgImage.test.ts`
Expected: FAIL — `Cannot find module './renderOgImage'`.

- [ ] **Step 3: Implement `build/og/renderOgImage.ts`**

```ts
import { readFileSync } from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const FONT_DIR = path.resolve(import.meta.dirname, "fonts");
const STATIC_DIR = path.resolve(import.meta.dirname, "..", "..", "static");

// Match the family name + files chosen in Task 1.
const FONT_FAMILY = "Mona Sans"; // or "Inter" if the fallback was used
let fontsCache: { name: string; data: Buffer; weight: 400 | 700; style: "normal" }[] | null = null;
function loadFonts() {
  if (!fontsCache) {
    fontsCache = [
      {
        name: FONT_FAMILY,
        data: readFileSync(path.join(FONT_DIR, "Mona-Sans-Regular.ttf")),
        weight: 400,
        style: "normal",
      },
      {
        name: FONT_FAMILY,
        data: readFileSync(path.join(FONT_DIR, "Mona-Sans-Bold.ttf")),
        weight: 700,
        style: "normal",
      },
    ];
  }
  return fontsCache;
}

// Rasterize an SVG logo to a PNG data URI so satori embeds a raster image
// (resvg renders standalone SVG cleanly; its <image> support is raster-oriented).
function logoPngDataUri(imgRelPath: string, size = 180): string {
  const svg = readFileSync(path.join(STATIC_DIR, imgRelPath), "utf8");
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
  return `data:image/png;base64,${Buffer.from(png).toString("base64")}`;
}

function popperDataUri(size = 40): string {
  const svg = readFileSync(path.join(STATIC_DIR, "popper.svg"), "utf8");
  const png = new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
  return `data:image/png;base64,${Buffer.from(png).toString("base64")}`;
}

const text = (value: string, style: Record<string, unknown>) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children: value },
});

const column = (title: string, imgRel: string) => ({
  type: "div",
  props: {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      width: "420px",
    },
    children: [
      { type: "img", props: { src: logoPngDataUri(imgRel), width: 180, height: 180 } },
      text(title, { fontSize: "64px", fontWeight: 700, color: "white" }),
    ],
  },
});

export async function renderComparisonOgPng(opts: {
  titleA: string;
  titleB: string;
  imgA: string;
  imgB: string;
}): Promise<Uint8Array> {
  const tree = {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
        backgroundColor: "#111827",
        fontFamily: FONT_FAMILY,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
            },
            children: [
              column(opts.titleA, opts.imgA),
              text("vs", { fontSize: "56px", color: "#6b7280" }),
              column(opts.titleB, opts.imgB),
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "row", alignItems: "center", gap: "14px" },
            children: [
              { type: "img", props: { src: popperDataUri(40), width: 40, height: 40 } },
              text("Component Party", { fontSize: "32px", color: "#9ca3af" }),
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: loadFonts() });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return png;
}
```

If you used the Inter fallback in Task 1, set `FONT_FAMILY = "Inter"` and read `font-400.woff`/`font-700.woff` instead of the `.ttf` names.

- [ ] **Step 4: Run test, verify it passes**

Run: `pnpm exec vitest run build/og/renderOgImage.test.ts`
Expected: PASS. If satori warns about a logo (e.g. a `currentColor` SVG rendering invisibly), note it; the test still passes on bytes. If a specific logo SVG fails to rasterize, report which.

- [ ] **Step 5: Commit**

```bash
git add build/og/renderOgImage.ts build/og/renderOgImage.test.ts
git commit -m "feat(og): comparison card renderer (satori + resvg)"
```

---

### Task 3: Prerendered OG endpoint + wire `og:image` into compare pages

**Files:**

- Create: `src/routes/og/[comparison].png/+server.ts`
- Modify: `src/routes/compare/[comparison]/+page.svelte`

**Interfaces:**

- Consumes: `renderComparisonOgPng` (Task 2), `canonicalPairs` (`$lib/comparisonPairs`), `parseComparison` (`$lib/frameworkUrl`), `matchFrameworkId` (`@frameworks`), `BASE_URL`.
- Produces: prerendered `dist/og/<a>-vs-<b>.png`; compare pages with `og:image`/`twitter:image`.

- [ ] **Step 1: Create the OG endpoint**

```ts
// src/routes/og/[comparison].png/+server.ts
import { error } from "@sveltejs/kit";
import { matchFrameworkId } from "@frameworks";
import { parseComparison } from "$lib/frameworkUrl";
import { canonicalPairs } from "$lib/comparisonPairs";
import { renderComparisonOgPng } from "../../../../build/og/renderOgImage";
import type { EntryGenerator, RequestHandler } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  canonicalPairs().map(([a, b]) => ({ comparison: `${a}-vs-${b}` }));

export const GET: RequestHandler = async ({ params }) => {
  const ids = parseComparison(params.comparison);
  if (!ids) error(404, "Unknown framework comparison");
  const [a, b] = ids;
  const fa = matchFrameworkId(a)!;
  const fb = matchFrameworkId(b)!;
  const png = await renderComparisonOgPng({
    titleA: fa.title,
    titleB: fb.title,
    imgA: fa.img,
    imgB: fb.img,
  });
  return new Response(png, {
    headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=604800" },
  });
};
```

> Route param with static suffix: the directory name `[comparison].png` makes `/og/react-vs-vue3.png` match with `params.comparison === "react-vs-vue3"`. Validate this early (Step 2). If SvelteKit rejects `[comparison].png`, fall back to `src/routes/og/[comparison]/image.png/+server.ts` (URL `/og/<x>/image.png`) and update the og:image URLs in Step 3 + Task 5 accordingly — record the change.

- [ ] **Step 2: Validate the route + render in dev**

Run: `pnpm run dev`, then fetch `http://localhost:<port>/og/react-vs-vue3.png` (curl -sI). Expected: `200`, `Content-Type: image/png`. If `404`/route error, switch to the fallback route shape and note it.

- [ ] **Step 3: Wire `og:image` into the compare page**

In `src/routes/compare/[comparison]/+page.svelte`, add an `ogImage` derived and two meta tags. Insert into the `<script>` after `canonical`:

```ts
const ogImage = $derived(`${BASE_URL}/og/${data.frameworkIds[0]}-vs-${data.frameworkIds[1]}.png`);
```

Add inside `<svelte:head>` (after the existing `og:description`/`twitter:description`):

```svelte
<meta property="og:image" content={ogImage} />
<meta property="twitter:image" content={ogImage} />
```

- [ ] **Step 4: Verify build output**

Run: `pnpm run build`
Then:

- `test -f dist/og/react-vs-vue3.png && head -c4 dist/og/react-vs-vue3.png | xxd | grep -i '8950 4e47'` → PNG signature present.
- `ls dist/og/*.png | wc -l` → `153`.
- `grep -o 'og:image[^>]*react-vs-vue3.png' dist/compare/react-vs-vue3/index.html` → matches.
  Report the build time delta.

- [ ] **Step 5: Commit**

```bash
git add "src/routes/og/[comparison].png" "src/routes/compare/[comparison]/+page.svelte"
git commit -m "feat(og): prerendered /og/[comparison].png endpoint; wire og:image"
```

---

### Task 4: Per-page JSON-LD (WebApplication home, TechArticle compare)

**Files:**

- Modify: `src/lib/seo.ts` (replace the static `WEBAPP_JSONLD` with factories)
- Modify: `src/routes/+layout.svelte` (remove global JSON-LD)
- Modify: `src/routes/+page.svelte` (home WebApplication)
- Modify: `src/routes/compare/[comparison]/+page.svelte` (TechArticle)

**Interfaces:**

- Consumes: `BUILD_DATE` (`$lib/buildDate`), `BASE_URL`, `createComparisonPath`.
- Produces:
  - `src/lib/seo.ts`: `SITE_PUBLISHED_DATE` (already added in Task 1), `webApplicationJsonLd(buildDate: string): object`, `techArticleJsonLd(opts: { titleA: string; titleB: string; description: string; url: string; image: string; buildDate: string }): object`.

- [ ] **Step 1: Replace `src/lib/seo.ts` with factories**

Keep `export const SITE_PUBLISHED_DATE = "2024-01-01";` (from Task 1). Replace the `WEBAPP_JSONLD` const with:

```ts
const ORG = {
  "@type": "Organization",
  name: "Component Party",
  url: "https://component-party.dev",
  logo: { "@type": "ImageObject", url: "https://component-party.dev/popper.svg" },
} as const;

export function webApplicationJsonLd(buildDate: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Component Party",
    description:
      "Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks.",
    url: "https://component-party.dev/",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: ORG,
    publisher: ORG,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: buildDate,
  };
}

export function techArticleJsonLd(opts: {
  titleA: string;
  titleB: string;
  description: string;
  url: string;
  image: string;
  buildDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${opts.titleA} vs ${opts.titleB} - side-by-side code comparison`,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    inLanguage: "en-US",
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: opts.buildDate,
    author: ORG,
    publisher: ORG,
    about: [
      {
        "@type": "SoftwareApplication",
        name: opts.titleA,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: opts.titleB,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  };
}
```

Delete the old `WEBAPP_JSONLD` export entirely (no `mainEntity`/`ItemList`).

- [ ] **Step 2: Remove the global JSON-LD from the layout**

In `src/routes/+layout.svelte`, delete the `import { WEBAPP_JSONLD } from "$lib/seo";` line and the entire `<svelte:head>` block containing `{@html ...WEBAPP_JSONLD...}`. (Header/Footer/children stay.)

- [ ] **Step 3: Add WebApplication JSON-LD to the home page**

In `src/routes/+page.svelte` `<script>`, add:

```ts
import { webApplicationJsonLd } from "$lib/seo";
import { BUILD_DATE } from "$lib/buildDate";
const webAppLd = webApplicationJsonLd(BUILD_DATE);
```

Add inside `<svelte:head>`:

```svelte
{@html `<script type="application/ld+json">${JSON.stringify(webAppLd)}<\/script>`}
```

- [ ] **Step 4: Add TechArticle JSON-LD to the compare page**

In `src/routes/compare/[comparison]/+page.svelte` `<script>`, add:

```ts
import { techArticleJsonLd } from "$lib/seo";
import { BUILD_DATE } from "$lib/buildDate";
const articleLd = $derived(
  techArticleJsonLd({
    titleA: data.titleA,
    titleB: data.titleB,
    description,
    url: canonical,
    image: ogImage,
    buildDate: BUILD_DATE,
  }),
);
```

Add inside `<svelte:head>`:

```svelte
{@html `<script type="application/ld+json">${JSON.stringify(articleLd)}<\/script>`}
```

- [ ] **Step 5: Verify**

Run: `pnpm run check` → 0 errors.
Run: `pnpm run build`, then:

- `grep -c '"@type":"WebApplication"' dist/index.html` → ≥1; `grep -c 'ItemList' dist/index.html` → 0.
- `grep -c '"@type":"TechArticle"' dist/compare/react-vs-vue3/index.html` → ≥1.
- `grep -rc '2024-12-01' dist/ | grep -v ':0' | head` → no matches (stale date gone).

- [ ] **Step 6: Commit**

```bash
git add src/lib/seo.ts src/routes/+layout.svelte src/routes/+page.svelte "src/routes/compare/[comparison]/+page.svelte"
git commit -m "feat(seo): per-page JSON-LD — WebApplication (home), TechArticle (compare)"
```

---

### Task 5: Integration tests + final validation

**Files:**

- Create: `test/og-jsonld.test.ts`

**Interfaces:**

- Consumes: built `dist/` output.

- [ ] **Step 1: Write the integration test (requires a prior build)**

```ts
// test/og-jsonld.test.ts
import { describe, it, expect, beforeAll } from "vitest";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const OUT = resolve(import.meta.dirname, "..", "dist");

describe("OG images", () => {
  it("emits a valid PNG for a comparison", async () => {
    const buf = await readFile(resolve(OUT, "og/react-vs-vue3.png"));
    expect([buf[0], buf[1], buf[2], buf[3]]).toEqual([0x89, 0x50, 0x4e, 0x47]);
    expect(buf.length).toBeGreaterThan(1000);
  });
  it("compare page references its own OG image", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain(
      'property="og:image" content="https://component-party.dev/og/react-vs-vue3.png"',
    );
    expect(html).toContain(
      'property="twitter:image" content="https://component-party.dev/og/react-vs-vue3.png"',
    );
  });
});

describe("JSON-LD", () => {
  it("compare page has TechArticle with both frameworks, no stale date", async () => {
    const html = await readFile(resolve(OUT, "compare/react-vs-vue3/index.html"), "utf8");
    expect(html).toContain('"@type":"TechArticle"');
    expect(html).toContain('"name":"React"');
    expect(html).toContain('"name":"Vue 3"');
    expect(html).not.toContain("2024-12-01");
  });
  it("home page has WebApplication without ItemList", async () => {
    const html = await readFile(resolve(OUT, "index.html"), "utf8");
    expect(html).toContain('"@type":"WebApplication"');
    expect(html).not.toContain("ItemList");
  });
});
```

> If the Step-3 route fallback (`/og/<x>/image.png`) was used, update the asserted URLs here to match.

- [ ] **Step 2: Build, then run the full unit suite**

Run: `pnpm run build`
Run: `pnpm run test:unit`
Expected: all pass — `renderOgImage`, `og-jsonld`, plus the pre-existing `frameworkUrl`/`comparisonPairs`/`prerender` tests.

- [ ] **Step 3: Final checks**

Run each, expect success:

- `pnpm run check` (0 errors)
- `pnpm run lint` (exit 0)
- `pnpm run build` (153 og PNGs in `dist/og/`, no build errors)

- [ ] **Step 4: Commit**

```bash
git add test/og-jsonld.test.ts
git commit -m "test(og): integration tests for OG images + per-page JSON-LD"
```

---

## Self-Review

**Spec coverage:**

- §3.1 deps/font → Task 1. ✓
- §3.2 renderer → Task 2 (logos rasterized SVG→PNG, the documented mitigation for resvg's nested-SVG limit; emoji replaced by popper.svg per §3.2/risk e). ✓
- §3.3 endpoint → Task 3 (prerender, entries, GET, route-suffix validation + fallback). ✓
- §3.4 og:image wiring → Task 3 Step 3. ✓
- §3.5 JSON-LD factories + per-page wiring + layout removal → Task 4. ✓
- §3.6 build date → Task 1 (Vite `define __BUILD_DATE__` + buildDate.ts) — uses a global define rather than `import.meta.env.VITE_BUILD_DATE` (simpler typing; same effect). ✓
- §4 tests → Task 2 (unit) + Task 5 (integration). ✓
- §5 risks → addressed in Task 1 (deps/font BLOCKED path), Task 2 (logo raster, currentColor note), Task 3 (route fallback). ✓
- §6 success criteria → Task 5 validation sweep. ✓

**Placeholder scan:** No TBD/"handle errors"/vague steps. Font Step 2 gives two fully-specified concrete paths (Mona Sans TTF or Inter woff) and requires recording which — not a placeholder. All code blocks complete.

**Type consistency:** `renderComparisonOgPng({ titleA, titleB, imgA, imgB })` defined in Task 2, called identically in Task 3. `canonicalPairs()`, `parseComparison`, `createComparisonPath`, `BASE_URL` reused with existing signatures. `webApplicationJsonLd(buildDate)` / `techArticleJsonLd({...})` defined in Task 4 Step 1, called in Steps 3-4. `BUILD_DATE` from `$lib/buildDate` (Task 1) consumed in Task 4. `ogImage` derived in Task 3 reused in Task 4 Step 4 (same component) — ensure Task 3's `ogImage` is in place before Task 4 Step 4 references it (Task 3 precedes Task 4). ✓

**Deviation from spec flagged:** §3.6 specified `import.meta.env.VITE_BUILD_DATE`; the plan uses a `__BUILD_DATE__` global `define` instead — same build-date injection, simpler typing, no `ImportMetaEnv` augmentation. Functionally equivalent; flagged here for confirmation.
