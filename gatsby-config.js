module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://www.example.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};
