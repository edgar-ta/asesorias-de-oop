/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "_includes/**/*.html",
    "_layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "bright-red": "#e5261f",
        "subtle-gray": "#f7f7f7",
      },
      spacing: {
        "horizontal-rule": "10vw"
      }
    },
  },
  plugins: [],
}
