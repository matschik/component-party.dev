import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: [vitePreprocess()],
  compilerOptions: {
    runes: true,
  },
  vitePlugin: {
    inspector: false, // set to true when inspector is compatible svelte 5
  },
};
