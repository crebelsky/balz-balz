module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Balz und Balz',
    siteUrl: 'http://balzundbalz.de/',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-source-filesystem',
    'gatsby-plugin-manifest',
    'gatsby-image',
    'gatsby-plugin-canonical-urls',
    'gatsby-plugin-google-analytics',
    'gatsby-plugin-manifest',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
  ],
};
