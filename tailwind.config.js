const colors = require('tailwindcss/colors')

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
        /*  */
        'purple-x': {
          300: '#8A1B8C',
          400: '#6D156F',
          600: '#581359',
          900: '#280728',
        },
        'gray-x': {
          txt: '#9e9ea7',
        },
      },
      fontFamily: {
        'ibm-flex-sans': ['IBM Plex Sans', 'sans-serif'],
        'Rubik': ['Rubik', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      green: colors.green,
      gray: colors.gray,
      blueGray: colors.slate,
      white: colors.white,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
