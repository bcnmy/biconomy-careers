const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/hero.png')",
      },
      colors: {
        'bico-orange': '#d85111',
        'bico-gray': {
          100: '#e5e5e5',
          200: '#c4c4c4',
          300: '#c1c1c1',
          400: '#545757',
        },
        'culture-image-desc': 'rgba(193, 193, 193, 0.75)'
      },
      transitionProperty: {
        'width': 'width',
      }
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['texgyreadventor', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}