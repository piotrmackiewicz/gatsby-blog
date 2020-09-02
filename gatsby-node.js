const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve('src/templates/BlogPost.tsx')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                        }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            component: blogPostTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug
            }
        })
    })

}