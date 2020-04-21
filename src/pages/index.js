import React from "react"
import { Redirect } from '@reach/router'

const IndexPage = ({data}) => (
  
  <Redirect to={`/bulletins/${data.allMarkdownRemark.edges[0].node.frontmatter.date}`} />
)

export const CurrentBulletinQuery = graphql`
  query CurrentBulletinQuery {
    allMarkdownRemark(filter: {isFuture: {eq: false}, frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

export default IndexPage
