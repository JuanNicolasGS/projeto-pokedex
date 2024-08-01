/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryDark: '#353535',
        secondaryDark: '#2E2E2E',
        primaryLight: '#FFFFFF',
        secondaryLight: '#E0E0E0',
      },
    },
  },
  plugins: [],
}

