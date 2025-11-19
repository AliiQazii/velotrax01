/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
        backgroundImage: {
           'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'custom-radial': 'radial-gradient(69% 199.37% at 51.8% 51.85%, #003d70, #1b84e2)',
        'btn-radial': 'radial-gradient(69% 199.37% at 51.8% 51.85%, #003d70, #1b84e2)',
         'radial-hero':
          'radial-gradient(69% 199.37% at 51.8% 51.85%, rgba(0,61,112,0.85) 0%, rgba(27,132,226,0.85) 100%)',
        
      },
       
    },
  },
  plugins: [],
};
