module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,eta}", "./index.html", "build/include/*.{html,eta}"],
  plugins: [require("@tailwindcss/typography")],
};
