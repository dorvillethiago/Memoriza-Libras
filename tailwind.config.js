/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smartphone': '330px',
        // => @media (min-width: 330px) { ... }

        'tablet': '768px',
        // => @media (min-width: 768px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 768px) { ... }
      },
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