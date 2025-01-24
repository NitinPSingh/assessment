/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4F46E5', 
          secondary: '#1E1B4B', 
        },
        lead:{
          "400":"#A3A3A3",
          "500":"#767676",
          "600":'#202020',
          "700":"#1D1D1D",
        }
      },
    },
  },
  plugins: [],
};

