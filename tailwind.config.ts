/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rosa-claro": "#F1A7C1", 
        "rosa-fuerte": "#F24B6C", 
        "lila-suave": "#6B4F9B",
        gris: "#4B5563", 
      },
      screens: {
        xs: "450px",
        ms: "550px",
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
