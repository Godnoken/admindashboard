module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
],
  theme: {
    
    extend: {
      colors: {
        mainColor: "#1992D4",
        mainColorHover: "#1577ac",
      },
      fontSize: {
        cardH: "clamp(12px, 2.8 * (1vw + 1vh) / 2, 22px)",
        cardP: "clamp(12px, 2.2 * (1vw + 1vh) / 2, 18px)",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }
    },
  },
  plugins: [],
}