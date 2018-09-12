module.exports = {
  siteMetadata: {
    title: 'Beyond the Ballot',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          "node_modules/modularscale-sass/stylesheets",
          "node_modules/compass-sass-mixins/lib"],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
  ],
}
