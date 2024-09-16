// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '480px'
      },
      colors: {
        'brand-bg': '#1f0437',
        'brand-purple-light': '#b1aee3',
        'brand-purple': '#3a0781',
        'brand-purple-dark': '#1f0437',
        'brand-accent': '#3206b8',
        'brand-header': '#212121',
        'brand-dark': '#212121',
        'brand-light': '#ffffff',
        'user-bubble': '#d3afff',
        'assistant-bubble': '#2B0558',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        shine: 'shine 2s ease-in-out forwards',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shine: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
