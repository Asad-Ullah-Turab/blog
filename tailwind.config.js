/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        background: "#f5f5f5",
        text: "#333333",
        "text-secondary": "#7f8c8d",
        accent: "#e74c3c",
        "card-bg": "#ffffff",
        border: "#dcdcdc",
      },
    },
  },
  plugins: [],
};
