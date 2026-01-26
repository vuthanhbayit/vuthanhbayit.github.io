import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13ec5b',
        'background-dark': '#050a07',
        'surface-dark': '#0c1610',
        ide: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          activity: '#333333',
          tab: '#1e1e1e',
          tabActive: '#1e1e1e',
          border: '#3e3e42',
          text: '#d4d4d4',
          keyword: '#569cd6',
          control: '#c586c0',
          string: '#ce9178',
          function: '#dcdcaa',
          variable: '#9cdcfe',
          property: '#9cdcfe',
          comment: '#6a9955',
          number: '#b5cea8',
          class: '#4ec9b0',
          cyan: '#4ec9b0',
          accent: '#007acc',
          selector: '#d7ba7d',
          unit: '#b5cea8'
        },
        blueprint: {
          grid: 'rgba(78, 201, 176, 0.05)'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse-slow': 'spin 16s linear infinite reverse',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '50%': { opacity: '0' }
        }
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(19, 236, 91, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 236, 91, 0.03) 1px, transparent 1px)',
        'blueprint-grid': 'linear-gradient(rgba(78, 201, 176, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 201, 176, 0.05) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config
