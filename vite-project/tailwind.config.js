/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
    "./public/index.html",         // Include this if you're using Tailwind in your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};