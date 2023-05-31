module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
          theme: {
            extend: {
              spacing: {
                '13': '3.25rem'
              },
              fontFamily: {
                opensans: ['OpenSans']
              },
              keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' }
                },
                bounceatas: {
                  '0%, 100%': { transform: 'translateY(0%)' },
                  '50%': { transform: 'translateY(-20%)' }
                },
              },
              animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                bounceatas: 'bounceatas 2s ease-in-out infinite',
              },
            },
          },
  plugins: [],
}
