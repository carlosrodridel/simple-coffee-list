/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: {
        DEFAULT: '#1B1D1F',
        dark: '#111315',
      },
      gray: '#6F757C',
      green: '#BEE3CC',
      white: '#FEF7EE',
      yellow: '#F6C768',
      red: '#ED735D',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-cafe.jpg')",
      },
    },
  },
  plugins: [],
}
