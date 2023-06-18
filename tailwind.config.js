/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Tillana"', "san-serif"],
      },
      backgroundImage: {
        hero: "url('./assets/images/bg.jpg')",
        secondary: "url('./assets/images/bg-secondary.jpg')",
      },
      colors: {
        black: "#191F2B",
        white: "#FEFFF6",
        pink: "#FF2164",
        purple: "#A70EB3",
        blue: "#2843D2",
        lightBlue: "#1986DE",
        deepBlue: "#2C374B",
        deeperBlue: "#191F2B",
        orange: "#FFBC19",
        green: "#00C879",
        transparentColor: "rgba(25, 31, 43, 0.5)",
      },
    },
  },
  plugins: [],
};
