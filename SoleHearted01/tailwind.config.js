/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./dist/*.html"],
  content: ["./dist/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        Wawak: 'rgb(255, 205, 204)',
        Tacao: 'rgb(244, 165, 164)',
        Mandy: 'rgb(228, 94, 107)',
        BurntSienna: 'rgb(242,123,90)',
        YourPink: 'rgb(255, 205, 204)',
      },
    },
  },
  plugins: [],
};
  
