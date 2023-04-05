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
      const pagePath = locale !== "en" ? `/${locale}/catalog/${node.slug}` : `/catalog/${node.slug}`;

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

  // Create pages for other content
  const pageResult = await graphql(`
    query {
      allDatoCmsPage {
        nodes {
          locales
          originalId
          slug
        }
      }
    }
  `);

  pageResult.data.allDatoCmsPage.nodes.forEach(node => {
    node.locales.forEach(locale => {
      let pagePath = "";
      if (node.slug === "index") {
        pagePath = "/";
        if (locale !== "en") {
          pagePath = `/${locale}${pagePath}`;
        }
      } else {
        pagePath = `/${locale}/${node.slug}`;
      }
  
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
