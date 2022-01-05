module.exports = {
  siteMetadata: {
    title: `Cindy | Front-end Engineer`,
    siteUrl: 'https://www.sceendy.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.sceendy.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-json`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
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
        icon: 'src/static/touch/icon128.png',
      },
    },
    `gatsby-plugin-offline`,
  ]
}
