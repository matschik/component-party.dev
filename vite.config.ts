import { defineConfig } from "vite-plus";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "node:fs/promises";
import path from "node:path";
import { Eta } from "eta";
import { minify as htmlMinify } from "html-minifier-terser";
import { frameworks } from "./frameworks";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";
import generateSitemap from "./scripts/generateSitemap";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import tailwindcss from "@tailwindcss/vite";
import { FRAMEWORK_SEPARATOR } from "./src/constants.ts";

// Helper function to create framework comparison URLs
const createFrameworkUrl = (frameworks: string[]) =>
  `/?f=${frameworks.join(FRAMEWORK_SEPARATOR)}`;

const footerNavigation = [
  {
    title: "Most Popular Frameworks",
    links: [
      { name: "React vs Vue", url: createFrameworkUrl(["react", "vue3"]) },
      {
        name: "React vs Angular",
        url: createFrameworkUrl(["react", "angularRenaissance"]),
      },
      { name: "Vue vs React", url: createFrameworkUrl(["vue3", "react"]) },
      {
        name: "Vue vs Angular",
        url: createFrameworkUrl(["vue3", "angularRenaissance"]),
      },
      {
        name: "Angular vs React",
        url: createFrameworkUrl(["angularRenaissance", "react"]),
      },
      {
        name: "Angular vs Vue",
        url: createFrameworkUrl(["angularRenaissance", "vue3"]),
      },
      {
        name: "Ember vs React",
        url: createFrameworkUrl(["emberPolaris", "react"]),
      },
      {
        name: "Ember vs Vue",
        url: createFrameworkUrl(["emberPolaris", "vue3"]),
      },
    ],
  },
  {
    title: "Popular frameworks vs Rising frameworks",
    links: [
      {
        name: "React vs Svelte",
        url: createFrameworkUrl(["react", "svelte5"]),
      },
      { name: "React vs Solid", url: createFrameworkUrl(["react", "solid"]) },
      { name: "Vue vs Svelte", url: createFrameworkUrl(["vue3", "svelte5"]) },
      { name: "Vue vs Solid", url: createFrameworkUrl(["vue3", "solid"]) },
      {
        name: "Angular vs Svelte",
        url: createFrameworkUrl(["angularRenaissance", "svelte5"]),
      },
      {
        name: "Angular vs Solid",
        url: createFrameworkUrl(["angularRenaissance", "solid"]),
      },
    ],
  },
  {
    title: "Comparing Legacy version & Current Version",
    links: [
      {
        name: "Svelte 4 vs Svelte 5",
        url: createFrameworkUrl(["svelte4", "svelte5"]),
      },
      { name: "Vue 2 vs Vue 3", url: createFrameworkUrl(["vue2", "vue3"]) },
      {
        name: "Angular vs Angular Renaissance",
        url: createFrameworkUrl(["angular", "angularRenaissance"]),
      },
      {
        name: "Aurelia 1 vs Aurelia 2",
        url: createFrameworkUrl(["aurelia1", "aurelia2"]),
      },
    ],
  },
  {
    title: "Comparing Current Version & Upcoming Version",
    links: [
      {
        name: "Ember Octane vs Ember Polaris",
        url: createFrameworkUrl(["emberOctane", "emberPolaris"]),
      },
    ],
  },
];

const templateDataDefaults = {
  title: "Component Party",
  url: "https://component-party.dev/",
  description: `Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks.`,
  keywords:
    "JavaScript frameworks, React, Vue, Angular, Svelte, Solid.js, framework comparison, web development, frontend frameworks, component libraries, JavaScript libraries, code comparison, programming tools, developer tools, web components, JSX, TypeScript, modern JavaScript",
  image: "https://component-party.dev/banner2.png",
  frameworkCount: frameworks.length,
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@frameworks": path.resolve(import.meta.dirname, "frameworks"),
    },
  },
  plugins: [
    pluginGenerateFrameworkContent(),
    svelte(),
    svelteInspector(), // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
    generateHtmlPagesPlugin([
      {
        outputPath: "index.html",
        template: "dist/index.html",
        templateData: {
          ...templateDataDefaults,
          navigations: footerNavigation,
        },
      },
    ]),
    tailwindcss(),
  ],
  optimizeDeps: {
    entries: ["src/**/*"],
  },
  build: {
    rollupOptions: {
      external: (id) => {
        return id.includes("/content/");
      },
      output: {},
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: false,
    target: "esnext",
  },
  lint: {
    plugins: ["typescript", "unicorn"],
    jsPlugins: ["eslint-plugin-svelte"],
    categories: {
      correctness: "off",
    },
    env: {
      builtin: true,
      browser: true,
      node: true,
    },
    globals: {
      $state: "readonly",
      $derived: "readonly",
      $effect: "readonly",
      $props: "readonly",
      $bindable: "readonly",
      $inspect: "readonly",
      $host: "readonly",
    },
    ignorePatterns: [
      "**/logs",
      "**/*.log",
      "**/npm-debug.log*",
      "**/yarn-debug.log*",
      "**/yarn-error.log*",
      "**/pnpm-debug.log*",
      "**/lerna-debug.log*",
      "**/node_modules",
      "**/dist",
      "**/dist-ssr",
      "**/*.local",
      ".vscode/*",
      "!.vscode/extensions.json",
      "**/.idea",
      "**/.DS_Store",
      "**/*.suo",
      "**/*.ntvs*",
      "**/*.njsproj",
      "**/*.sln",
      "**/*.sw?",
      "src/generatedContent",
      "**/archive",
      "**/vite.config.js.timestamp*",
      "content/**",
      "**/test-results",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/.npm",
      "**/.yarn",
      "**/.cache",
      "**/playwright-report",
      "public/_redirects",
    ],
    rules: {
      "for-direction": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-new-native-nonconstructor": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "error",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "no-with": "error",
      "require-yield": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "no-array-constructor": "error",
      "no-unused-expressions": "error",
      "constructor-super": "error",
      "getter-return": "error",
      "no-misleading-character-class": "error",
      "no-unassigned-vars": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-useless-assignment": "error",
      "preserve-caught-error": "error",
      "svelte/comment-directive": "error",
      "svelte/infinite-reactive-loop": "error",
      "svelte/no-at-debug-tags": "warn",
      "svelte/no-at-html-tags": "error",
      "svelte/no-dom-manipulating": "error",
      "svelte/no-dupe-else-if-blocks": "error",
      "svelte/no-dupe-on-directives": "error",
      "svelte/no-dupe-style-properties": "error",
      "svelte/no-dupe-use-directives": "error",
      "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
      "svelte/no-immutable-reactive-statements": "error",
      "svelte/no-inner-declarations": "error",
      "svelte/no-inspect": "warn",
      "svelte/no-navigation-without-resolve": "error",
      "svelte/no-not-function-handler": "error",
      "svelte/no-object-in-text-mustaches": "error",
      "svelte/no-raw-special-elements": "error",
      "svelte/no-reactive-functions": "error",
      "svelte/no-reactive-literals": "error",
      "svelte/no-reactive-reassign": "error",
      "svelte/no-shorthand-style-property-overrides": "error",
      "svelte/no-store-async": "error",
      "svelte/no-svelte-internal": "error",
      "svelte/no-unknown-style-directive-property": "error",
      "svelte/no-unnecessary-state-wrap": "error",
      "svelte/no-unused-props": "error",
      "svelte/no-unused-svelte-ignore": "error",
      "svelte/no-useless-children-snippet": "error",
      "svelte/no-useless-mustaches": "error",
      "svelte/prefer-svelte-reactivity": "error",
      "svelte/prefer-writable-derived": "error",
      "svelte/require-each-key": "error",
      "svelte/require-event-dispatcher-types": "error",
      "svelte/require-store-reactive-access": "error",
      "svelte/system": "error",
      "svelte/valid-each-key": "error",
      "svelte/valid-prop-names-in-kit-pages": "error",
      "typescript/ban-ts-comment": "error",
      "typescript/no-duplicate-enum-values": "error",
      "typescript/no-empty-object-type": "error",
      "typescript/no-explicit-any": "error",
      "typescript/no-extra-non-null-assertion": "error",
      "typescript/no-misused-new": "error",
      "typescript/no-namespace": "error",
      "typescript/no-non-null-asserted-optional-chain": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-this-alias": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-declaration-merging": "error",
      "typescript/no-unsafe-function-type": "error",
      "typescript/no-wrapper-object-types": "error",
      "typescript/prefer-as-const": "error",
      "typescript/prefer-namespace-keyword": "error",
      "typescript/triple-slash-reference": "error",
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
        rules: {
          "no-class-assign": "off",
          "no-const-assign": "off",
          "no-dupe-class-members": "off",
          "no-dupe-keys": "off",
          "no-func-assign": "off",
          "no-import-assign": "off",
          "no-new-native-nonconstructor": "off",
          "no-obj-calls": "off",
          "no-redeclare": "off",
          "no-setter-return": "off",
          "no-this-before-super": "off",
          "no-unsafe-negation": "off",
          "no-var": "error",
          "no-with": "off",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
        },
      },
      {
        files: ["*.svelte", "**/*.svelte"],
        rules: {
          "no-inner-declarations": "off",
          "no-self-assign": "off",
        },
      },
    ],
    options: {},
  },
  fmt: {
    printWidth: 80,
    sortPackageJson: false,
    // Enable .svelte formatting via the bundled prettier-plugin-svelte
    // (requires the `svelte` package, already a dependency).
    svelte: true,
    // Framework comparison examples (content/**) are the displayed corpus and
    // are kept Prettier-formatted by the content build pipeline; src/generatedContent
    // is generated. Exclude both so Oxfmt only touches app/project code.
    ignorePatterns: ["content/**", "src/generatedContent/**"],
  },
  staged: {
    "*.{js,ts,svelte,html,md,css}": "vp fmt --write",
    // Regenerate README progress when content changes (filenames are ignored
    // by the wrapped command; sh -c receives them as positional args).
    "content/**/*":
      "sh -c 'vp node scripts/generateReadMeProgress.ts && git add README.md'",
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});

async function generateHtmlPagesPlugin(pages: unknown[]) {
  const eta = new Eta({ views: "." });

  const template = {
    footer: await fs.readFile(
      path.resolve(import.meta.dirname, "build/template/footer.html"),
      "utf8",
    ),
  };

  const htmlTransform = {
    include(html: string) {
      for (const [templateName, templateContent] of Object.entries(template)) {
        html = html.replace(
          `<!--template:${templateName}-->`,
          eta.renderString(templateContent, { navigations: footerNavigation }),
        );
      }
      return html;
    },
    render(htmlEta: string, data: unknown) {
      return eta.renderString(htmlEta, data as object);
    },
  };

  return {
    name: "generate-html-pages",
    transformIndexHtml(html: string, ctx: unknown) {
      html = htmlTransform.include(html);
      if ((ctx as { server?: unknown }).server) {
        const matchedPage = pages.find(
          (page: unknown) =>
            (ctx as { originalUrl?: string }).originalUrl ===
            filePathToUrl((page as { outputPath: string }).outputPath),
        );
        if (matchedPage) {
          html = htmlTransform.render(
            html,
            (matchedPage as { templateData: unknown }).templateData,
          );
        } else {
          html = htmlTransform.render(html, templateDataDefaults);
        }
      }
      return html;
    },
    async closeBundle() {
      // Generate sitemap
      await generateSitemap();

      for (const page of pages) {
        const template =
          (page as { template?: string }).template || "index.html";
        const templateData =
          (page as { templateData?: unknown }).templateData || {};
        const templatePath = path.join(import.meta.dirname, template);
        const outputPath = path.join(
          import.meta.dirname,
          "dist",
          (page as { outputPath: string }).outputPath,
        );

        const templateContent = await fs.readFile(templatePath, "utf8");
        const compiledHtml = eta.renderString(templateContent, templateData);
        const minifiedHtml = await htmlMinify(compiledHtml);
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true });
        await fs.writeFile(outputPath, minifiedHtml, "utf8");
      }
    },
  };
}

function filePathToUrl(filePath: string) {
  const normalizedPath = path.normalize(filePath);
  const baseName = path.basename(normalizedPath);

  if (baseName === "index.html") {
    return path.dirname(normalizedPath) === "."
      ? "/"
      : path.dirname(normalizedPath) + "/";
  } else {
    return normalizedPath.replace(/.html$/, "");
  }
}
