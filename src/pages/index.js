import React from 'react'
import SEO from '../components/seo'
import Header from '../components/header'
import Events from '../components/events'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {

  return (
    <>
      <div className="wrapper">
        <SEO title={data.current.nodes[0].frontmatter.title} />
        <Header data={data.config} />
        <Events events={data.current.nodes[0].frontmatter.events} />
      </div>
      <Footer />
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  )
}

export const currentBulletinQuery = graphql`
  query CurrentBulletinQuery {
    current: allMarkdownRemark(filter: {isFuture: {eq: false}, frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1) {
      nodes {
        frontmatter {
          type
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
    config: markdownRemark(frontmatter: {type: {eq: "church"}}) {
      frontmatter {
        name
        message
        type
        title
        cta {
          label
          link
        }
        links {
          type
          link
        }
      }
    }
  }
`

export default IndexPage