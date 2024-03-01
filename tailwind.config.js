/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const card_flip = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
            fontFamily: {
                virgil: ['Virgil']
            }
        },
  },
  plugins: [card_flip],
}

