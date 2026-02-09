/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft pastel color scheme: Peach + Mint
        primary: {
          50: '#fff5f0',
          100: '#ffe8db',
          200: '#ffd1b8',
          300: '#ffba95',
          400: '#ffa372',
          500: '#ff8c5e', // Main soft peach
          600: '#e67a4f',
          700: '#cc6840',
          800: '#b35631',
          900: '#994422',
        },
        secondary: {
          50: '#f0fdf9',
          100: '#d4f8ed',
          200: '#a8f0d9',
          300: '#7ce8c5',
          400: '#50e0b1',
          500: '#3dd5a2', // Main soft mint
          600: '#35c091',
          700: '#2daa80',
          800: '#25956f',
          900: '#1d805e',
        },
        light: {
          50: '#ffffff',
          100: '#fafaf9',
          200: '#f5f5f4',
          300: '#e7e5e4',
          400: '#d6d3d1',
        },
        warm: {
          50: '#fef8f3',
          100: '#fef1e6',
          200: '#fde3cd',
          300: '#fcd5b4',
        }
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 38, 255, 0.5), 0 0 10px rgba(100, 38, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(100, 38, 255, 0.8), 0 0 30px rgba(100, 38, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
