require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ross-Store`,
    description: `Store with new shoes`,
    siteUrl: `https://www.yourdomain.tld`,
    defaultLocale: "en",
    languages: ["en", "uk"],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.API_KEY,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          uk: ['uk'],
        },
        defaultLocale: 'en',
        allLocales: true
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
