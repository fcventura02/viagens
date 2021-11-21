const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '500': '500px',
       },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
            height: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            height: "100%",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      backgroundImage: {
        "rio-montanhas":
          "url('/viagens/img/rio.webp')",
        "casal-praia":
          "url('/viagens/img/casal.webp')",
        "cataratas":
          "url('/viagens/img/cataratas.jpg')",
        "comida":
          "url('/viagens/img/comida.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
