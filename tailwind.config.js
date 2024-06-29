/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#2C3439', 
        yellow: '#FFEB3B',
      },
      fontFamily: {
        caprasimo: ['Caprasimo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        bright: ['Bright', 'sans-serif'],
    },
  },
  },
  plugins: [],
}