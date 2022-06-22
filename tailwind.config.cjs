const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lowmess: "#27292b",
        cultured: "#F9F9F9",
      },
      fontFamily: {
        sans: ["Inter", fontFamily.sans],
      },
    },
  },
  plugins: [],
};
