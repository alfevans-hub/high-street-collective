/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        primary: '#D94F3D',
        accent: '#FF6B35',
        yellow: '#FFD166',
        dark: '#2C1810',
        muted: '#6B4C3B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px 0 rgba(44,24,16,0.10)',
        'warm-lg': '0 8px 40px 0 rgba(44,24,16,0.14)',
      },
    },
  },
  plugins: [],
}
