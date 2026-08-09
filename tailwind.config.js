/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0D0F16',
        surface: '#151822',
        surface2: '#1B1F2C',
        line: '#262B3A',
        ink: '#E6E8F0',
        muted: '#8A90A6',
        keyword: '#7AA2F7',
        string: '#5DE4C7',
        func: '#E0AF68',
        tag: '#C678DD',
        danger: '#F07178',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #1b1f2c 1px, transparent 1px), linear-gradient(to bottom, #1b1f2c 1px, transparent 1px)',
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
