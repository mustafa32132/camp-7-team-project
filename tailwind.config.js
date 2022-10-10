/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0 15px 20px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        gold: "#FEDA2C",
      },
    },
  },
  plugins: [],
};
