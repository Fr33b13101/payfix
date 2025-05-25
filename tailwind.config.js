/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c0e0ff',
          300: '#80c0ff',
          400: '#4095f5',
          500: '#0071e3', // Primary Apple blue
          600: '#0066cc',
          700: '#0055ae',
          800: '#00448c',
          900: '#00336d',
        },
        gray: {
          50: '#f9fafb',
          100: '#f5f5f7', // Apple light gray
          200: '#e5e5e7',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#6e6e73',
          600: '#424245',
          700: '#333336',
          800: '#1d1d1f', // Apple dark gray
          900: '#151516',
        },
        success: '#34c759', // Apple green
        warning: '#ff9500', // Apple orange
        error: '#ff3b30', // Apple red
        accent: '#2997ff', // Apple accent blue
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};