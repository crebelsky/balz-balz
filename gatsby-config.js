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
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
