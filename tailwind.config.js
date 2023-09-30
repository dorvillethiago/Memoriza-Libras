/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#080519',
        'background': '#e8e6ff',
        'primary': '#6456c8',
        'secondary': '#c2bbf1',
        'accent': '#6ec578',
      }
    },
  },
  plugins: [],
}