/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#221C1C",
      "dark-white": "#E0E0E0",
      "cloudy-white": "#D9D9D9",
      red: "#FF2323",
      "light-red": "#FFD9D9",
      "dark-red": "#966D6D",
      "light-brown": "#A48484",
      "dark-brown": "#362B2B",
      "water-blue": "#0D60C1",
      "fire-red": "#CA4208",
      "page-background": "#AFB9DF",
      "pokedex-info-background": "#FFD9D9",
      "unfocused-font": "#7D7D7D",
      button: "#A6BDBE",
      "dark-gray": "#979797",
      gray: "#C0C9CA",
      white: "#F3F3F3",
    },
    fontFamily: {},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
