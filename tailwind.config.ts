/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary": "#00040f",
        "secondary": "#00f6ff",
        "dimWhite": "rgba(255, 255, 255, 0.7)",
        "dimBlue": "rgba(9, 151, 124, 0.1)",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#0C097D",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(2, 6, 37,0.03)",
          100: "rgba(2, 6, 37,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};
