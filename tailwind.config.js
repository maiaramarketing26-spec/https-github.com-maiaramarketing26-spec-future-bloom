/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#18234a',
        navy: '#243b80',
        purple: '#7257d9',
        coral: '#f46d4f',
        sun: '#ffc94a',
        cream: '#fffaf4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(32, 49, 106, .12)',
        card: '0 12px 30px rgba(32, 49, 106, .08)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'fade-up': 'fadeUp .7s ease-out both',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-10px) rotate(1deg)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
