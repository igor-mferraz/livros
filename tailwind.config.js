/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#12100D",
        BorderColor: "#27272A",
        btnDefault: "#fff"
      },
      backgroundColor: {
        bgBtnDefault: '#18181B'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
          'mobile': {'max': '640px'},
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

