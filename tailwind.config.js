module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightmain: '#ecf0f3',
        //darkmain: "#04060e",
        darkmain: "#050816",
        secondary: "#bdbcc4",
        tertiary: "#010924",
        // tertiary: "#151030",
        "black-100": "#070d46",
        "black-200": "#010938",
        // "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        card2: '0px 20px 40px -15px darkturquoise',
        card3: '0px 35px 120px 15px #172664',
        card3b: '0px 35px 120px -15px #172664',
        card4: '1px 1px 15px .1px #074274',
      },
      backgroundImage: {
        "hero-pattern": "url('/public/herobg.png')",
      },
      animation: {
        'custom-ping': 'customPing 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
    },
  },
  plugins: [],
};
