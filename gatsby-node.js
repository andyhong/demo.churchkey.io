const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bulletinTemplate = path.resolve(`src/templates/bulletin.js`)
  
  return graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      const id = node.id
      createPage({
        path: `/bulletins/${node.frontmatter.date}`,
        component: bulletinTemplate,
        context: { id: id },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ])
}