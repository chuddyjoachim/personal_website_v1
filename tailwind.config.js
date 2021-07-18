const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green: colors.green,
      gray: colors.gray,
      blueGray: colors.blueGray,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
