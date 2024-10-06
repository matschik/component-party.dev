import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import pluginGenerateFrameworkContent from "./build/generateContentVitePlugin.js";
import generateHtmlPagesVitePlugin from "./build/generateHtmlPagesVitePlugin.js";
import UnoCSS from "unocss/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginGenerateFrameworkContent(),
    svelte(),
    svelteInspector(), // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
    generateHtmlPagesVitePlugin(),
    UnoCSS(),
  ],
  ignore: ["content"],
});
