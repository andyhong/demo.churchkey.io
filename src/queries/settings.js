import { useStaticQuery, graphql } from 'gatsby'

export const useSettingsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query settingsQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "church"}}}) {
          edges {
            node {
              frontmatter {
                name
                message
                links {
                  type
                  link
                }
                cta {
                  label
                  link
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges[0].node.frontmatter
}