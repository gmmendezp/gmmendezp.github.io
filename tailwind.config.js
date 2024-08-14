/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Raleway", "Helvetica", "sans-serif"],
      serif: ["Arima Madurai", "cursive", "serif"],
    },
    extend: {
      colors: {
        primary: "#333",
        secondary: "#ccc",
        tertiary: "#b2b2b2",
        h1: "#333",
        h2: "#353535",
        h3: "#292929",
        menu: "#222822",
        "menu-hover": "#283428",
        main: "#ddd",
        main1: "#cff09e",
        main2: "#a8dba8",
        main3: "#79bd9a",
        main4: "#3b8686",
        main5: "#388383",
        main6: "#0b486b",
      },
    },
  },
  plugins: [],
};
