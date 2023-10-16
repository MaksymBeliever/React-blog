/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        theme: {
          blue: '#61DAFB',
          gray: '#282C34',
        }
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}

