const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: v('paper'),
        ink: v('ink'),
        mute: v('mute'),
        line: v('line'),
        surface: v('surface'),
        ember: v('ember'),
        pine: {
          DEFAULT: v('pine'),
          hover: v('pine-hover'),
          soft: v('pine-soft'),
          mist: v('pine-mist'),
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: { '50%': { opacity: '0' } },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(24px, -18px)' },
        },
        ping: { '75%, 100%': { transform: 'scale(2.2)', opacity: '0' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        blink: 'blink 1s steps(1) infinite',
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite reverse',
        ping: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
