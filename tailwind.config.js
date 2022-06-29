module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/razorking.jpg')"
      }
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
