module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Pretendard', 'Georgia', 'serif'],
      },
      colors: {
        background: '#faf9f7',
        surface: '#faf9f7',
        'surface-container-low': '#f3f4f1',
        'surface-container-high': '#e6e9e6',
        outline: '#777c79',
        'outline-variant': '#afb3b0',
        accent: '#6B705C',
        accentDark: '#2F3A44',
        'on-surface': '#2f3331',
        'on-surface-variant': '#5c605d',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(47, 51, 49, 0.08)',
      },
    },
  },
  plugins: [],
};
