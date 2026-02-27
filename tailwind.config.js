/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0F2B",
        secondary: "#E11D48",
        lightbg: "#F5F6F8",
      },
    },
  },
  plugins: [],
};