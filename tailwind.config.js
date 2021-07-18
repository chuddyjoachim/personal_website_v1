const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
    },
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
