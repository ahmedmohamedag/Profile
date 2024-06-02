/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0F172A',
        'dark2': '#1E293B',
        "light":"#f1f1f1",
        "main":"#49f15f"
      },
    },
  },
  plugins: [],
}