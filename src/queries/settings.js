import { useStaticQuery, graphql } from 'gatsby'

export const useSettingsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query settingsQuery {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "church"}}}) {
          nodes {
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
    `
  )
  return allMarkdownRemark.nodes[0].frontmatter
}