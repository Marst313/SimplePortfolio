/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_orange: '#B55400',
        bg_primary_slate: '#222831',
        white: 'rgb(var(--white) / <alpha-value>)',
      },
      fontFamily: {
        moonDance: ['Moon Dance', 'cursive'],
      },
      animation: {
        bounce613: 'bounce613 0.4s linear',
        vibrate3: 'vibrate 0.5s linear infinite both',
        launch: 'launchToTop 0.5s linear infinite both',
        jello: 'jello 0.9s linear infinite both',
        bounceBg: 'bounceToTop 1s linear  both',
      },
      keyframes: {
        bounce613: {
          '40%': { transform: 'scale(1.4)' },
          '60%': { transform: 'scale(0.8)' },
          '80%': { transform: 'scale(1.2)' },
          '100% ': { transform: 'scale(1)' },
        },
        vibrate: {
          '0%,100%': { transform: 'translate(0)' },
          '10%,50%,80%': { transform: 'translate(-2px,-2px)' },
          '20%,60%,90%': { transform: 'translate(2px,-2px)' },
          '70%,30%': { transform: 'translate(-2px,2px)' },
        },
        jello: {
          '0%,100%': { transform: 'scale(1, 1)' },
          '30%': { transform: 'scale(1.25, 0.75)' },
          '40%': { transform: 'scale(0.75, 1.25)' },
          '50%': { transform: 'scale(1.15, 0.85)' },
          '65%': { transform: 'scale(0.95, 1.05)' },
          '75%': { transform: 'scale(1.05, 0.95)' },
        },
        bounceToTop: {
          '0%': { transform: 'scale(0)' },
          '10%': { transform: 'translateY(100%)' },
          '100%': { transform: 'scale(1) translateY(-100%)' },
        },
        launchToTop: {
          '0%': { transform: 'translateY(0) ' },
          '100%': { transform: 'translate(0)' },
          '10%,50%,80%': { transform: 'translate(-2px,-2px)' },
          '20%,60%,90%': { transform: 'translate(2px,-2px)' },
          '70%,30%': { transform: 'translate(-2px,2px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
