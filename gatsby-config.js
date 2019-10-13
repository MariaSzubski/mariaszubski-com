module.exports = {
  siteMetadata: {
    title: `Maria Szubski - Freelance Front End Developer - Cincinnati, OH`,
    description: `Cincinnati, OH - Web Development Contractor`,
    author: `Maria Szubski Digital, LLC`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-eslint',
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: 'Nunito',
    //           variants: ['300', '400', '600', '700'],
    //           //fontDisplay: 'swap',
    //           //strategy: 'selfHosted' // 'base64' || 'cdn'
    //         },
    //       ],
    //     },
    //     useMinify: true,
    //     usePreload: true,
    //     usePreconnect: true,
    //     //formats: ['woff2', 'woff'],
    //   },
    // },
  ],
}
