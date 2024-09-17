/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'move1': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'move2': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-in-out forwards infinite',
        'move1': 'move1 1.5s ease-in-out infinite', // Corrected the animation name
        'move2': 'move2 1.5s ease-in-out infinite', // Corrected the animation name
        'blink': 'blink .5s steps(2, start) infinite',
      },
    },
  },
  plugins: [],
}
