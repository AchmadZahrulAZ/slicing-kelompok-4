/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // Font kustom
      'raleway': ['Raleway', 'sans-serif'],
    },
    colors: {
      // Warna kustom
      darkblue: '#0E1F51',
      peachred: '#FF3E54',
      blackshade: '#252525',
      offwhite: '#F7F7F7',
      whitecstm: '#081717',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};