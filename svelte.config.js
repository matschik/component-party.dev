import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // fallback: "404.html" — Cloudflare Pages serves /404.html for unmatched
    // URLs; SvelteKit hydrates it and renders src/routes/+error.svelte (the 404).
    adapter: adapter({ pages: "dist", assets: "dist", fallback: "404.html" }),
    alias: { "@frameworks": "./frameworks", $generated: "./src/generatedContent" },
    prerender: { handleHttpError: "fail", handleMissingId: "fail" },
  },
};

export default config;
