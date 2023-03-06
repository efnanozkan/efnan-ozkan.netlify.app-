/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['BR Firma', 'sans-serif'],
        monospace: ['VT323', 'monospace'],
        sentences: ['Chakra Petch', 'sans-serif']
    },
    backgroundImage: {
      'hero': "url('./assets/hero1.png')",
    },
    colors: {
      'hover-color': '#7477FF',
      'dark': '#191825',
      'alien': '#24e32d',

    },
  },
  plugins: [],
}
}
