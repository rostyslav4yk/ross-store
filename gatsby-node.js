const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
  `)


  result.data.allDatoCmsProduct.nodes.forEach(node => {
    node.locales.forEach(locale => {
      createPage({
        path: `${locale}/${node.slug}`,
        component:  path.resolve(`src/pages/${locale}/product.js`),
        context: {
          productId: node.originalId,
        },
      })
    })
  })
}
  