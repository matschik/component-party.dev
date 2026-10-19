import { defineConfig } from "vite-plus";
import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";

const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

export default defineConfig({
  plugins: [
    pluginGenerateFrameworkContent(),
    tailwindcss(),
    sveltekit({
      // fallback: "404.html" — the Workers assets service serves /404.html for
      // unmatched URLs (void.config.ts); SvelteKit hydrates it and renders
      // src/routes/+error.svelte (the 404).
      adapter: adapter({ pages: "dist", assets: "dist", fallback: "404.html" }),
      prerender: { handleHttpError: "fail", handleMissingId: "fail" },
    }),
  ],
  define: { __BUILD_DATE__: JSON.stringify(BUILD_DATE) },
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
    "content/**/*": "sh -c 'node scripts/generateReadMeProgress.ts && git add README.md'",
  },
  test: {
    include: [
      "src/**/*.{test,spec}.{js,ts}",
      "test/**/*.{test,spec}.{js,ts}",
      "build/**/*.{test,spec}.{js,ts}",
    ],
    exclude: ["test/e2e/**"],
  },
});
