/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lime-green': '#00FF00', // You can adjust the shade if needed
        'black': '#000000',
      },
    },
  },
  plugins: [],
};
