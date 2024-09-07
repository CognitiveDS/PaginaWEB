/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4A0E4E', // El color principal que has proporcionado
        'brand-light-purple': '#6B2A74', // Un tono más claro para acentos
        'brand-dark-purple': '#380B3A', // Un tono más oscuro para contrastes
        'brand-silver': '#E0E0E0', // Un tono plateado más claro para mejor contraste
        'brand-header': '#6B2A74',
      },
    },
  },
  plugins: [],
}