import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// import type { Config } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: [vitePreprocess()],
  compilerOptions: {
    runes: true,
  },
  vitePlugin: {
    inspector: false, // set to true when inspector is compatible svelte 5
  },
};

export default config;
