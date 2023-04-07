exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Get all DatoCMS products and pages
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
      allDatoCmsPage {
        nodes {
          locales
          originalId
          slug
        }
      }
    }
  `);

  const { defaultLocale } = require("./gatsby-config").plugins.find(
    plugin => plugin.resolve === "gatsby-source-datocms"
  ).options;

  // Create pages for each product
  result.data.allDatoCmsProduct.nodes.forEach(node => {
    const slug = node.slug;
    node.locales.forEach(locale => {
      const pagePath = `${locale === defaultLocale ? `/catalog/${slug}` : `/${locale}/catalog/${slug}`}`;

      createPage({
        path: pagePath,
        component: require.resolve(`./src/pages/product.js`),
        context: {
          productId: node.originalId,
          locale: locale,
        },
      });
    });
  });

  // Create pages for each page
  result.data.allDatoCmsPage.nodes.forEach(node => {
    node.locales.forEach(locale => {
      let pagePath = node.slug === "index" ? "/" : `/${node.slug}`;
      pagePath = locale === defaultLocale ? pagePath : `/${locale}${pagePath}`;

      createPage({
        path: pagePath,
        component: require.resolve(`./src/pages/${node.slug}.js`),
        context: {
          pageId: node.originalId,
          locale: locale,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  })
}