/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // todo button, text, hover
        'primary-blue': '#598FAA',
        // todo border, hover
        'primary-gray': '#D4D5D4',
      }
    },
    plugins: [],
  }
}