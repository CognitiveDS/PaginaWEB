module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#1f0437',
        'brand-purple-light': '#b1aee3',
        'brand-purple': '#3a0781',
        'brand-purple-dark': '#1f0437',
        'brand-accent': '#3206b8',
        'brand-header': '#E0E0E0',
      },
      backgroundColor: {
        'dark': '#121212',
        'light': '#ffffff',
      },
      textColor: {
        'dark': '#ffffff',
        'light': '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}