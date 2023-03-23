const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const lang = window.location.pathname === "/en/" ? "en" : "uk"

    const productTemplate = path.resolve(`src/pages/${lang}/product.js`)

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
        path: `/pages/${lang}/${node.slug}`,
        component: productTemplate,
        context: {
          productId: node.originalId,
        },
      })
    })
  }
  