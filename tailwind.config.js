module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 1024px) { ... }

        lg: "1180px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        lemonGreen: "#ACF162",
        // red: "#EE3337",
        // gray: {
        //   light: "#EEE6E6",
        //   dark: "#202020",
        // },
        // orange: {
        //   dark: "#EE3337",
        //   light: "#F78B33",
        // },
      },

      fontFamily: {
        orbitron: ["Orbitron"],
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
};
