/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      colors: {
        primary: {
          100: "#022C22",
          200: "#059669",
        },
        secondary: {
          100: "#991b1b",
        },
      },
      keyframes: {
        slideReview: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        animateWaveL: {
          "0%": { backgroundPositionX: "1000px" },
          "100%": { backgroundPositionX: "0px" },
        },
        animateWaveR: {
          "0%": { backgroundPositionX: "0px" },
          "100%": { backgroundPositionX: "1000px" },
        },
        typing: {
          from: { width: 0 },
        },
      },
    },
  },
  plugins: [],
};
