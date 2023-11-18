/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/card/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textTheme: "#b8afda",
        bgTheme: "#101010",
        cardTheme: "#c7d8c5",
      },
    },
  },
  plugins: [],
};
