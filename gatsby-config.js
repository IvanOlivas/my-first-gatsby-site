module.exports = {
  siteMetadata: {
    title: "Welcome to My First Gatsby Site!",
  },
  plugins: [
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
        hostingWPCOM: false,
        useACF: false
        },
      }
  ],
};