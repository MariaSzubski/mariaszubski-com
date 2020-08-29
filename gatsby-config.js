module.exports = {
  siteMetadata: {
    title: `Maria Szubski - Freelance Frontend Developer - Cincinnati, OH`,
    description: `Cincinnati, OH - Web Development Contractor - Available For Hire`,
    author: `Maria Szubski`,
    siteUrl: "https://mariaszubski.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-eslint",
    "gatsby-plugin-offline",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        commonmark: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maria Szubski - Freelance Front End Developer - Cincinnati, OH - Web Development Contractor`,
        short_name: `Maria Szubski Digital, LLC`,
        start_url: `/`,
        background_color: `#121D28`,
        theme_color: `#121D28`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ["300", "400", "600", "700", "800"],
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
        //formats: ['woff2', 'woff'],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
        host: `cdn.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: true,
      },
    },
  ],
}
