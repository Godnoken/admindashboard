module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
],
  theme: {
    
    extend: {
      colors: {
        main: "#1992D4",
        mainHover: "#1577ac"
      },
      fontSize: {
        main: "clamp(12px, 5 * (1vw + 1vh) / 2, 100px)",
        desktopMain: "clamp(12px, 2 * (1vw + 1vh) / 2, 100px)",
      },
    },
  },
  plugins: [],
}