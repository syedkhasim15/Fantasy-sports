/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik Scribble"', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'], // Corrected syntax
      },
    },
  },
  plugins: [],
}
