/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'DynaPuff': ['DynaPuff', 'cursive'],
        // 'Merriweather': ['Merriweather', 'serif'],
        // 'rubik' : ['"Rubik"', 'sans-serif'],
        // 'Cairo' : ['"Cairo"', 'sans-serif'],
        'rubik-900' : ['"Rubik"', 'sans-serif'],
        'alegreya' : ['Alegreya', 'serif'],
        'spaceMono' : ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
