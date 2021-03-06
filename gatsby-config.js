module.exports = {
  siteMetadata: {
    title: `Brent Danley`,
    description: `Science and relationships and laughs and fun. You've arrived at the place.`,
    author: `@brentdanley`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'config/gatsby-express.json',
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brentdanley-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/gratitude`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              disableBgImageOnAlpha: true,
              wrapperStyle: 'width:70%;max-width:800px;margin:0 auto;',
              showCaptions: true,
            }
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
  
              // ?Boolean=true
              //   If true (the default), all CSS
              //   property names will be recognized
              //   as styleAttribute.
              styleAttributes: true,
  
              // ?Boolean=false
              //   If true, all attributes that
              //   aren't styleAttributes, will be
              //   added as data-* attributes to the
              //   image.
              dataAttributes: false
            }
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          `gatsby-plugin-twitter`,
          `gatsby-plugin-instagram-embed`,
        ]
      }
    },
    `gatsby-plugin-fontawesome-css`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
