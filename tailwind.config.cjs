module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f3eee6',
        ink: '#1a1814',
        mute: '#6a635a',
        line: '#ddd4c6',
        surface: '#fffdf8',
        pine: {
          DEFAULT: '#0e6b5c',
          hover: '#0a574b',
          soft: '#dceee9',
          mist: '#b7d8d0',
        },
      },
    },
  },
  plugins: [],
}
