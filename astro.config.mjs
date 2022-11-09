import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import FullReload from "vite-plugin-full-reload";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/
  integrations: [tailwind(), svelte()],
  vite: {
    plugins: [FullReload(["content/**/*"])],
    optimizeDeps: {
      exclude: ["locate-path", "path-exists", "find-up"],
    },
  },
});
