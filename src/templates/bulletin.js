import React from "react"

import Header from "../components/header"
import "../components/style.css"
import Footer from "../components/footer"
import Events from "../components/events"
import SEO from "../components/seo"

const BulletinTemplate = ({data}) => {

  const { events } = data.markdownRemark.frontmatter

  return (
    <div className="wrapper">
      <SEO title={data.markdownRemark.frontmatter.date} />
      <Header />
      <Events events={events} />
      <Footer />
    </div>
  )
}

export const BulletinQuery = graphql`
  query BulletinById ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
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
