/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/index.tsx",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#A2BD9D",
      },
    },
  },
  plugins: [],
};
