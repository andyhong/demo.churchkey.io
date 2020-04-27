import React from 'react'
import SEO from '../components/seo'
import Header from '../components/header'
import Events from '../components/events'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {
  
  const { title, events } = data.allMarkdownRemark.nodes[0].frontmatter

  return (
    <div className="wrapper">
      <SEO title={title} />
      <Header />
      <Events events={events} />
      <Footer />
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </div>
  )
}

export const currentBulletinQuery = graphql`
  query CurrentBulletinQuery {
    allMarkdownRemark(filter: {isFuture: {eq: false}, frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          events {
            time
            name
            link
            description
            date
          }
        }
      }
    }
  }
`

export default IndexPage