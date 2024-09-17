
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    colors:{
      'main' : '#209AD6',
      'text' : '#7A7A7A',
      'white': '#FFFFFF',
      'black': '#000000'

  },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}