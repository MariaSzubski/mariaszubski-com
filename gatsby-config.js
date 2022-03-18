const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.mariaszubski.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Frontend Web Developer - Available For Hire | Maria Szubski | Cincinnati, OH`,
    description: `Web developer specializing in React, Gatsby, GraphQL, and Accessibility. Available for hire.`,
    image: `https://images.ctfassets.net/sx9v94b5k8eh/4CAcEnflCwe2A6tAfi88rl/4dba9b7ae6d60c864a79cba7ea97092d/maria-szubski_web-developer.jpg`,
    author: `Maria Szubski`,
    siteUrl: siteUrl,
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
        name: "Maria Szubski - Freelance Developer",
        start_url: `/`,
        background_color: `#121D28`,
        theme_color: `#121D28`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        prefer_related_applications: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              { userAgent: "*", disallow: ["/projects", "/projects/*"] },
            ],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/projects", "/projects/*"],
      },
    },
  ],
}
