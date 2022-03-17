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
        darkMainColor: "#1c1c20",
        darkSecondaryColor: "#232326",
        darkAccentColor: "#2c2c30",
      },
      fontSize: {
        appHeader: "clamp(20px, 4 * (1vw + 1vh) / 2, 28px)",
        containerHeader: "clamp(24px, 4 * (1vw + 1vh) / 2, 30px)",
        cardH: "clamp(12px, 2.8 * (1vw + 1vh) / 2, 20px)",
        cardP: "clamp(12px, 2.2 * (1vw + 1vh) / 2, 16px)",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      spacing: {
        bigIcon: "clamp(24px, 7 * (1vw + 1vh) / 2, 45px)",
        smallIcon: "clamp(18px, 4 * (1vw + 1vh) / 2, 30px)",
        mainTopPadding: "clamp(18px, 12 * (1vw + 1vh) / 2, 200px)",
        mainBotPadding: "clamp(18px, 22 * (1vw + 1vh) / 2, 225px)",
      }
    },
  },
  plugins: [],
  darkMode: "class"
}