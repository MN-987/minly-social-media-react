/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': ' #F5FCFF',
        "li-hover":"#74bad9",
        "li-active":"#178CBF"
        
      },
      textColor: {
        'custom-color2': ' #0D4D69' // Replace with your desired color code
      },
    },
  },
  plugins: [],
}

