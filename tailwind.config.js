const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
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
