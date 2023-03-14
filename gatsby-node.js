exports.createPages = async({actions, graphql}) => {
    const {createPage} = actions;
    
    const result = await graphql(`
        {
            allDatoCmsPage {
                nodes {
                  title
                  slug
                  originalId
                }
            }
        }
    `)

    console.log(result)

    result.data.allDatoCmsPage.nodes.forEach(page => {
        createPage({
            path: `/${page.slug === "index" ? "" : page.slug}`,
            component: require.resolve("./src/components/layout.js"),
            context: {
                id: page.originalId
            },
        })
    });
}
