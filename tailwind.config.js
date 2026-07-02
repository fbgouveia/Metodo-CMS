/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          papel: '#FAFBFC',
          noite: '#1F2A38',
          sereno: '#5DA9CD',
          bruma: '#EEF5F9',
          ceu: '#D8E9F2',
          aguada: '#3D8AAF',
          carvao: '#2C3848',
          pedra: '#6B7682',
          areia: '#C9A87A',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
