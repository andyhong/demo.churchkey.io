import React from 'react'
import { Link } from 'gatsby'
import "../components/style.css"
import SEO from '../components/seo'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch } from '@fortawesome/free-solid-svg-icons'

const BulletinsPage = ({ data }) => {

  return (
    <div className="wrapper">
      <SEO title={"Bulletins"} />
      <FontAwesomeIcon icon={faChurch} size="4x" style={{color: '#FAAE2B'}}></FontAwesomeIcon>
      <div style={divStyle}>
        <h1>bulletins</h1>
        <p>Here you find a list of all bulletins that have been published.</p>
        {data.allMarkdownRemark.nodes.map(node => (
          <Link key={node.frontmatter.date} to={`/bulletins/${node.frontmatter.date}`}><h3 style={{color: '#FAAE2B'}}>{node.frontmatter.date}</h3></Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

const divStyle = {
  maxWidth: '350px',
  display: 'block',
  textAlign: 'center',
}

export const AllBulletinsQuery = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`

export default BulletinsPage
