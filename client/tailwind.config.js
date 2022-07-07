/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Kurenaido", "serif"],
      },
      screens: {
        tablet: "750px",
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
