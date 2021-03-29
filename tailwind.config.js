module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        12: "repeat(12, minmax(0, 1fr))",
        10: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-7": "span 7 / span 7",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      transformOrigin: ["active"],
      rotate: ["active"],
      transform: ["active"],
      transitionDelay: ["active"],
      transitionDuration: ["active"],
      transitionProperty: ["active"],
      transitionTimingFunction: ["active"],
      translate: ["active"],
    },
  },
  plugins: [],
};
