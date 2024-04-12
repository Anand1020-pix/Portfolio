/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: ['responsive', 'hover', 'focus'],  
    
    },
  },
  plugins: [
    require('postcss-import'),
    require('postcss-nested'), // add this line
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

