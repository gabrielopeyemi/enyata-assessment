/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      oxfordBlue: '#031434',
      frenchGray: '#B0B9C8',
      celticBlue: '#0A74DC',
      black: '#000',
      white: '#fff',
      antiFlashWhite: '#EBEBEE',
      jordyBlue: '#A9C1FF',
      plumWeb: '#FFA9EC',
      mindaro: '#FDFFA9',
      forestGreen: '#00992B',
      coolgray: '#A4A7B7'
      
    },
    fontSize: {
      xs: '0.75rem', 
      sm: '0.875rem', 
      md: '1rem', 
      lg: '1.125rem', 
      '9': '9px',
		},
    extend: {
      spacing: {
        '2': '1.5rem', // 24px
        '3': '2.375rem', // 38px
        '6': '4.125rem', // 66px
        '8': '2rem', // 32px
        '9': '6rem', // 96px
      },
    },
  },
  plugins: [],
}
