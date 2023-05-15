/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      backgroundImage: {
        'header-dt': "url('/images/bg-header-desktop.svg')",
        'header-mb': "url('/images/bg-header-mobile.svg')"
      },
      colors: {
        primary100: 'hsl(180, 29%, 50%)',
        neutral100: 'hsl(180, 52%, 96%)',
        neutral400: 'hsl(180, 31%, 95%)',
        neutral700: 'hsl(180, 8%, 52%)',
        neutral900: 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        body: ['"League Spartan"']
      }
    },
  },
  plugins: [],
}
