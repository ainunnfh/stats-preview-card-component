/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        custom: "15px",
      },
    },
  },
  plugins: [],
};
