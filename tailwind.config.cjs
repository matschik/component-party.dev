module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts,eta}",
    "./index.html",
    "build/template/*.{html,eta}",
  ],
  plugins: [require("@tailwindcss/typography")],
};
