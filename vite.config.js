import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { createHtmlPlugin } from "vite-plugin-html";
import FRAMEWORKS from "./frameworks.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          frameworkList: FRAMEWORKS.map((f) => f.title).join(", "),
        },
      },
    }),
  ],
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
});
