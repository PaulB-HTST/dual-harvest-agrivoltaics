import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#243660',
          dark: '#111B30',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#E8B820',
          dark: '#B08010',
        },
        green: {
          forest: '#2D5016',
          mid: '#3D6B20',
          light: '#4E8828',
        },
      },
      fontFamily: {
        sans: ['Google Sans Flex', 'Google Sans', 'sans-serif'],
        display: ['Google Sans Flex', 'Google Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
export default config
