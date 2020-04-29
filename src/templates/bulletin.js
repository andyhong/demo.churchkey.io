import React from "react"

import Header from "../components/header"
import "../components/style.css"
import Footer from "../components/footer"
import Events from "../components/events"
import SEO from "../components/seo"

const BulletinTemplate = ({data}) => {

  return (
    <>
      <div className="wrapper">
        <SEO title={data.content.frontmatter.title} />
        <Header data={data.config}/>
        <Events events={data.content.frontmatter.events} />
        <Footer />
      </div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  )
}

export const BulletinQuery = graphql`
  query BulletinById ($id: String, $config: String) {
    content: markdownRemark(id: {eq: $id}) {
      frontmatter {
        config
        type
        title
        events {
          name
          date
          time
          link
          description
        }
      }
    }
    config: markdownRemark(frontmatter: {type: {eq: $config}}) {
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

export default BulletinTemplate
