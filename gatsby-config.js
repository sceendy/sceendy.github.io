module.exports = {
  siteMetadata: {
    title: `Cindy | Front-end Engineer`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sceendy",
        short_name: "sceendy",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#FF4081",
        display: "standalone",
      },
    },
    `gatsby-plugin-offline`
  ]
}
