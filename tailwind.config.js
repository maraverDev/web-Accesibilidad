/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Permite cambiar el tema agregando la clase "dark" en <html> o <body>
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir todas las rutas donde usas clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
