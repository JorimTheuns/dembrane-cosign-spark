/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      mauve: "#FEB1FE",
      celeste: "#A8FEFF",
      apple: "#B7FEB9",
      blackish: "#080F0F",
      blink: "#4169E1",
      grey: "#E9EAEB",
    },
    extend: {
      screens: { trip: "865px" },
    },
  },
  plugins: [],
};
