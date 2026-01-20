/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors: {
        'jalisco': {
          'red': '#C8102E',
          'gold': '#F2A900',
          'blue': '#003087'
        }
      }
    },
  },
  plugins: [],
}
