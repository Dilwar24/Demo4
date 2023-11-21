/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#FFFFFF",
        "color-primary-light": "#000000",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#C0C0C0	",
        "color-white": "#fff",
        "color-blob": "#A427DF",
        "color-red": "#FF0000",
        "color-green": "#008000",
        "color-yellow": "#FFFF00",
        "color-teal": "#008080"

      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
}
