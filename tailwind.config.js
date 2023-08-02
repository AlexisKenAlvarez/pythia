/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#131313',
        subtle: '#B6B6B6',
        button: '#C4A066'
      },
      fontFamily: {
        primary: ['Primary'],
        secondary: ['Secondary']
      }
    },
  },
  plugins: [],
}

