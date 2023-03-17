const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const productTemplate = path.resolve(`src/pages/product.js`)

    const result = await graphql(`
      query {
        allDatoCmsProduct {
          nodes {
            id
            slug
            originalId
          }
        }
      }
    `)
  
    result.data.allDatoCmsProduct.nodes.forEach(node => {
      createPage({
        path: `/pages/${node.slug}`,
        component: productTemplate,
        context: {
          productId: node.originalId,
        },
      })
    })
  }
  