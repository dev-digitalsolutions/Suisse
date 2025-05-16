/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Source Sans 3"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'swiss-red': '#FF0000',
        'swiss-dark': '#D10000',
        'alpine-blue': '#0F2D52',
        'alpine-light': '#E8F1FF',
        'parchment': '#F5F1E6',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}
