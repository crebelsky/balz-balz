// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      body: [
        "Open Sans",
        "Helvetica Neue",
        "Helvetica",
        "Roboto",
        "Arial",
        "sans serif",
      ],
    },
    extend: {
      colors: {
        background: "#141313",
      },
    },
  },
  variants: {},
};
