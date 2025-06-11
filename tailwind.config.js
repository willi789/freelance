/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
  safelist: [
    // Safelist dynamic classes used in components
    'bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100', 'bg-orange-100', 'bg-red-100', 'bg-gray-100',
    'text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600', 'text-orange-600', 'text-red-600',
    'from-blue-500', 'from-green-500', 'from-purple-500', 'from-yellow-500', 'from-orange-500', 'from-red-500',
    'to-cyan-500', 'to-emerald-500', 'to-pink-500', 'to-orange-500', 'to-yellow-500', 'to-pink-500',
    'border-blue-500', 'border-green-500', 'border-purple-500', 'border-yellow-500', 'border-orange-500', 'border-red-500',
    'ring-blue-300', 'ring-green-300', 'ring-purple-300', 'ring-yellow-300', 'ring-orange-300', 'ring-red-300',
  ]
}