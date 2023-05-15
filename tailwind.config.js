/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "weak-text-color": "#7F7F7F",
        "strong-text-color": "#d0d0d0",
      },
    },
  },
  plugins: [],
};
