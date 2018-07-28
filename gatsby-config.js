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
        "icons": [{
          "src": "assets/touch/icon128.png",
          "sizes": "128x128",
          "type": "image/png"
        }, {
          "src": "assets/touch/icon256.png",
          "sizes": "256x256",
          "type": "image/png"
        }, {
          "src": "assets/touch/icon512.png",
          "sizes": "512x512",
          "type": "image/png"
        }],
      },
    },
    `gatsby-plugin-offline`
  ]
}
