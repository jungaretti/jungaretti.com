const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["src/**/*.html", "src/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
