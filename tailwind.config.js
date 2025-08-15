/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to match your file locations
  ],
  theme: {
    extend: {
      screens: {
        xs: '30rem', // 480px
      },
    },
  },
  plugins: [],
};

