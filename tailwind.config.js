module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'orange-button':'#ff561e',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#ff561e'
        },
      }
      addUtilities(extendUnderline)
    }
  ],
};
