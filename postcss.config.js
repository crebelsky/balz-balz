const tailwindConfig = require("./tailwind.config.js");

module.exports = () => ({
  plugins: [
    require(`tailwindcss`)(tailwindConfig),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === `production`
      ? [require(`cssnano`)]
      : []),
  ]
})