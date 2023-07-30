/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F7F2EC',
        'secondary': '#617C71'
      },
      fontFamily: {
        'abel': ['Abel', 'sans-serif']
      }
    },
  },
  plugins: [],
}

