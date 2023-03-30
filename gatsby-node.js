const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allDatoCmsProduct {
        nodes {
          locales
          title
          id
          originalId
          slug
        }
      }
    }
  `);

  result.data.allDatoCmsProduct.nodes.forEach(node => {
    node.locales.forEach(locale => {
      let pagePath = `${locale}/catalog/${node.slug}`;

      // Check if the language is the default language
      if (locale === "en") {
        // Set the path to just "/catalog/:slug" for English pages
        pagePath = `/catalog/${node.slug}`;
      }

      createPage({
        path: pagePath,
        component: require.resolve(`./src/pages/product.js`), // updated path
        context: {
          productId: node.originalId,
        },
      });
    });
  });
};

