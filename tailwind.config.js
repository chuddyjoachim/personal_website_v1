const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
      colors: {
        'custom-dark-blue': '#546E7A',
        'custom-gray': '#9B9B9A',
        'custom-black': '#191919',
        'custom-text': '#4c4c4c',
        'banner-grey': '#E8E8E8',
      },
    },
    colors: {
      ...colors,
      green: colors.green,
      gray: colors.gray,
      blueGray: colors.slate,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
