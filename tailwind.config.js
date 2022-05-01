const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
      colors: {
        "primary-gray": {
          DEFAULT: "#F7F7FB",
          200: "#E8E8FB",
          300: "#BFBFE3",
        },
        yellow: {
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#FFBF00",
          600: "#CC9900",
          700: "#997300",
          800: "#664D00",
          900: "#332600",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-item": {
          "box-shadow": "0px 15px 30px rgba(0,0,0,0.1)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
