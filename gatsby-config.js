const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Balz und Balz`,
    description: `Balz und Balz - Café und feine Kost in Hamburg Hoheluft ab Mai.`,
    keywords: `Balz, balzundbalz, Hamburg, Hoheluft, Café, Kaffee, Delikatessen, Homemade, Espresso, Latte, Cappuccino`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Balz und Balz`,
        short_name: `BalzBalz`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.backgound,
        theme_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: 'static/media/icons/apple-touch-icon.png',
        icons: [
          {
            src: `static/media/icons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `static/media/icons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `static/media/icons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
};
