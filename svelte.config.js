import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ pages: "dist", assets: "dist", fallback: undefined }),
    alias: { "@frameworks": "./frameworks", $generated: "./src/generatedContent" },
    prerender: { handleHttpError: "fail", handleMissingId: "fail" },
  },
};

export default config;
