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
        pagePath = `/catalog/${node.slug}`;
        createPage({
          path: pagePath,
          component: require.resolve(`./src/pages/product.js`),
          context: {
            productId: node.originalId,
          },
        });
      } else {
        const countryCode = locale.slice(2);
        pagePath = `/${countryCode}${pagePath}`;
        createPage({
          path: pagePath,
          component: require.resolve(`./src/pages/${locale}/product.js`),
          context: {
            productId: node.originalId,
          },
        });
      }
    });
  });  
};
