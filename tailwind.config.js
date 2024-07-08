/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.handlebars'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { backgroundColor: 'rgba(0, 128, 0, 1)' },
          '100%': { backgroundColor: 'rgba(0, 128, 0, 0)' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

