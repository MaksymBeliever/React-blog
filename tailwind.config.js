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
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem'
      },
      colors: {
        theme: {
          blue: '#61DAFB',
          darkBlue: '#387F93',
          pageHoverBg: '#ECEEEF',
          lightenGray: '#DDDDDD',
          lightGray: '#BBBBBB',
          tag: '#AAAAAA',
          gray: '#282C34',
          darkGray: '#21232A'
        }
      },
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem'
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)',
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)'
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem'
      }
    },
  },
  plugins: [],
}

