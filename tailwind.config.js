/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#0B1437',
          900: '#141B4D',
          800: '#1E2A6B',
          700: '#2C3A8C',
          600: '#3D4FAE'
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          400: '#34D399'
        },
        ink: '#0B1437',
        cream: '#F8FAFC',
        mist: '#F1F5F9'
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'scroll-x': 'scrollX 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: 0, transform: 'translateX(-40px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        scrollX: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        pulseRing: { '0%': { transform: 'scale(0.8)', opacity: 0.8 }, '100%': { transform: 'scale(2)', opacity: 0 } }
      }
    }
  },
  plugins: []
}
