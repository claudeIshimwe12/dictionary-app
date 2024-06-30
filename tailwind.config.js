/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      spacing: {
        tablet: "4.38rem",
        laptop: "19.56rem ", //"352px",
      },
      colors: {
        "primary-black": "#050505",
        "semi-black": "#1F1F1F",
        "semi-light-black": "#2D2D2D",
        "light-black": "#3A3A3A",
        "dark-grey": "#757575",
        "semi-dark-grey": "#E9E9E9",
        "almost-white": "#F4F4F4",
        "primary-blue": "#A445ED",
        "primary-red": "#FF5252",
      },
    },
  },
  plugins: [],
};
