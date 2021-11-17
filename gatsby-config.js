//gatsby.config.js
module.exports = {
    pathPrefix: `gatsby-geo-simple-map`,
    siteMetadata: {
      title: "My First Gatsby Site!",
      description: `Ivan's first site`,
      author: `Ivan Olivas`,
    },
    plugins: [
    `gatsby-plugin-react-leaflet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
      },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
          url: `https://csc496wordpress.tldr.dev/graphql`,
          protocol: `https`,
          hostingWPCOM: 'false',
          useACF: 'false'
        }
      },
    ]
  }