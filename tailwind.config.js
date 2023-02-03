/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}"
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      mybgcolor: '#041C32',
      mycolor: '#04293A',
      mycolor2: '#064663',
    },
    extend: {
      fontFamily: {
        Roboto:['Roboto Mono', 'monospace']  
      }
    },    
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}