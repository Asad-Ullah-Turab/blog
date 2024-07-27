/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-2": "850px",
      },
      colors: {
        primary: "#181A1B",
        secondary: "#B3AD7A",
        "header-link": "#82A1C4",
        background: "#181A1B",
        text: "#978F82",
        "text-secondary": "#7f8c8d",
        accent: "#0C1F62",
        "card-bg": "#ffffff",
        border: "#25346B",
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
