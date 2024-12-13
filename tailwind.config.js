/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandColor:'#17C2EC',
      }
    },
    container:{
      center:true,
      padding: '2rem'
    },
    fontFamily:{
      'Poppins':["Poppins", 'sans-serif'],
      'Nunito': ["Nunito", 'sans-serif'],
      'Overpass':["Overpass", 'sans-serif'],
    },

  },
  plugins: [],
}
