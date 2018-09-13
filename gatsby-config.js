module.exports = {
  siteMetadata: {
    title: 'Beyond the Ballot',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          "node_modules/modularscale-sass/stylesheets"
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-image',
    'gatsby-transformer-remark'
  ],
}
