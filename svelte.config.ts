import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: [vitePreprocess()],
  vitePlugin: {
    inspector: true,
  },
};

export default config;
