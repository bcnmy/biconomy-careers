const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bico-gray': {
          100: '#e5e5e5',
          200: '#c4c4c4',
          300: '#c1c1c1',
          400: '#545757',
        },
      }
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['texgyreadventor', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}