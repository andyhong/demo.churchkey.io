import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch } from '@fortawesome/free-solid-svg-icons'

const NotFoundPage = () => (
  <div className="wrapper">
    <SEO title="404" />
    <FontAwesomeIcon icon={faChurch} size="4x" style={{color: '#FAAE2B'}}></FontAwesomeIcon>
    <h1>not found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/"><h3 style={{color: '#FAAE2B'}}>click here to go back.</h3></Link>
    <Footer />
  </div>
)

export default NotFoundPage
