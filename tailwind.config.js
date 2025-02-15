/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "sans-serif"],
      },
      colors: {
        bgColor: "#06192F",
        primaryTextColor: "#FFF",
        highlightedTextColor: "#FF6F61",
        buttonBgColor: "#FF6F61",
        loadedScreenBgColor: "#000",
      },
      screens: {
        sm: "480px",
        xsm: "600px",
        md: "768px",
        lg: "920px",
        xl: "1280px",
        "2xl": "1480px",
      },
      container: {
        center: true,
        padding: "2.5%",
      },
    },
  },
  plugins: [],
};
