
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
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    colors:{
      'main' : '#209AD6',
      'text' : '#7A7A7A',
      'white': '#FFFFFF',
      'black': '#000000',
      'footer': '#004E83',
      'footerText': '#FFF'

  },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
    [require("tw-elements-react/dist/plugin.cjs")]
  ],
}