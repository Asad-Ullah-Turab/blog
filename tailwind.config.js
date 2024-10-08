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
        accent2: "#1a1e1f",
        "card-bg": "#ffffff",
        border: "#25346B",
        footerbtn: "#34383a",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
