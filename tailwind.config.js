/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-extralight': ['Nunito Sans', 'sans-serif', '200'],
        'sans-light': ['Nunito Sans', 'sans-serif', '300'],
        'sans-regular': ['Nunito Sans', 'sans-serif', '400'],
        'sans-medium': ['Nunito Sans', 'sans-serif', '500'],
        'sans-semibold': ['Nunito Sans', 'sans-serif', '600'],
        'sans-bold': ['Nunito Sans', 'sans-serif', '700'],
      },
    },
  },


  plugins: [],
}