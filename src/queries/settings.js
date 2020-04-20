import { useStaticQuery, graphql } from 'gatsby'

export const useSettingsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query settingsQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "settings"}}}) {
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