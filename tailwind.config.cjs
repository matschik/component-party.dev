const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,svelte,ts,tsx,vue}",
    "./*.{html,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
};
