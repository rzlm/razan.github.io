/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        
          'yellow-light': '#FFFADE',
         'purple-light': '#DAC3FF',
         'txt-light':'#eee5f4',
        'purplemid': '#53458E',
        'btn-purple': '#DAC3FF',
        'bg-purple': '#1c1646',
        'purp': '#FCF7FF',
        'green-neon': '#00EDC1',
        
       },
       fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        
      },
      backgroundImage: theme => ({
        'gradient-text': 'linear-gradient(90deg, rgba(255, 0, 0, 0.8) 0%, rgba(0, 255, 0, 0.8) 50%, rgba(0, 0, 255, 0.8) 100%)',
      }),

    },
  },
  plugins: [],
}

