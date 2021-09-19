const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', fontFamily.sans]
      }
    }
  }
};
