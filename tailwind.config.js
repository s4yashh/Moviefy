/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  presets: [{ nativewind: true }],
  theme: {
    extend: {
      colors: {
        primary: '#659c83',
        secondary: {
          DEFAULT: '#ff7f50',
          20: '#ddb95e',
          100: '#ab8bff',
          200: '#a0a0a0'
        },
        light: {
          100: '#f0f4f8',
          200: '#d9e2ec',
          300: '#bcccdc'
        },
        dark: {
          1: '#102a43',
          2: '#243b53',
          3: '#334e68',
          4: '#486581'
        }
      }
    }
  },
  plugins: []
};
