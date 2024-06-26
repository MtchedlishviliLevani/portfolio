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
        md: "768px",
        lg: "920px",
        xl: "1280px",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
        },
        padding: {
          DEFAULT: "5%",
          sm: "5%",
          md: "5%",
          lg: "5%",
          xl: "2.5%",
          "2xl": "2.5%",
        },
      },
      maxWidth: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
      },
    },
  },
  plugins: [],
};
