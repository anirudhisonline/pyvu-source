/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-cake': "url('https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/6485683db291651e7854/view?project=646e4104545b97c89aa3')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#F02E65",
        
"secondary": "#00FFB3",
        
"accent": "#FFF338",
        
"neutral": "#11052C",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

