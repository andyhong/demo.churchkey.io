import React from "react"

import Header from "../components/header"
import "../components/style.css"
import Footer from "../components/footer"
import Events from "../components/events"
import SEO from "../components/seo"

const BulletinTemplate = ({data}) => {

  const { events } = data.markdownRemark.frontmatter

  return (
    <>
      <div className="wrapper">
        <SEO title={data.markdownRemark.frontmatter.title} />
        <Header />
        <Events events={events} />
        <Footer />
      </div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  )
}

export const BulletinQuery = graphql`
  query BulletinById ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        events {
          name
          date
          time
          link
          description
        }
      }
    }
  }
`

export default BulletinTemplate
