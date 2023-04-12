/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-white": "#E0E0E0",
      "cloudy-white": "#D9D9D9",
      red: "#DB3636",
      "light-red": "#FFD9D9",
      "dark-red": "#966D6D",
      "light-brown": "#A48484",
      "dark-brown": "#362B2B",
      "blue-water": "#0D60C1",
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
