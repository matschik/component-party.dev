import presetWind from "@unocss/preset-wind";
import { defineConfig } from "unocss";
import { presetTypography } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{html,js,ts,svelte}", "build/template/*.html"],
  },
  presets: [presetIcons(), presetWind(), presetTypography()],
});
