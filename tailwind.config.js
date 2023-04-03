/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkBlue: '#212B31',
        secondary: '#72787D',
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
        center: true,
      },
    }
  },
  plugins: [],
}
