import { defineConfig } from "vite-plus";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin";
import generateRedirectsVitePlugin from "./build/generateRedirectsVitePlugin";

const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

export default defineConfig({
  plugins: [
    pluginGenerateFrameworkContent(),
    tailwindcss(),
    sveltekit(),
    generateRedirectsVitePlugin(),
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
    "content/**/*": "sh -c 'vp node scripts/generateReadMeProgress.ts && git add README.md'",
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}", "test/**/*.{test,spec}.{js,ts}"],
    exclude: ["test/e2e/**"],
  },
});
