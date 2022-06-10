module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/salon-1.jpeg')"
      }
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
