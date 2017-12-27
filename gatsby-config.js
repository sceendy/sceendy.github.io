module.exports = {
  pathPrefix: `/sceendy.github.io`,
  siteMetadata: {
    title: `Cindy Juarez`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-25355768-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          },
        ],
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
