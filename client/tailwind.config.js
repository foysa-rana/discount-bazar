/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '576px',   
      'md': '768px',   
      'lg': '992px',   
      'xl': '1280px', 
    },
    extend: {
      // other extensions can go here
    },
  },
  plugins: [],
}

