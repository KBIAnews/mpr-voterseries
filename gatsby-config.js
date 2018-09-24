module.exports = {
  siteMetadata: {
    title: 'Beyond the Ballot',
    siteUrl: 'https://apps.kbia.fm/beyond-the-ballot/',
    description: 'Find out what real voters are looking for in the November midterm election.'
  },
  pathPrefix: `/2018-beyond-the-ballot`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-24704798-11",
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      }},
    'gatsby-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 3840,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-layout'
    },
    {
      resolve: 'gatsby-plugin-feed'
    }
  ],
}
