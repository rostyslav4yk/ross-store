require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ross-Store`,
    siteUrl: `https://www.yourdomain.tld`,
    defaultLanguage: 'en',
    langs: ["en", "uk"],
  },
  pathPrefix: '/en',
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.API_KEY,
        preview: false,
        localeFallbacks: {
          en: ['en'],
          uk: ['uk', 'en'],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
