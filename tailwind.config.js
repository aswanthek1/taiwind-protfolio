/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":'480px',
      },
      spacing:{
        "big":'38rem',
      },
    },
    fontFamily:['Nunito', 'sans-serif']
  },
  plugins: [],
}