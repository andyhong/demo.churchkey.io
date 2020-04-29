import React from 'react'
import SocialLinks from './social-links'
import logo from '../images/door.svg'

function Header (props) {

  const { name, message, cta, links } = props.data.frontmatter

  return (
    <div className="headerWrapper">
      <img src={logo} height="90" width="90" alt="logo"></img>
      <h1>{ name }</h1>
      <SocialLinks links={links} />
      <p>{ message }</p>
      <a style={{width: '100%', padding: '0.5em 0'}} name={cta[0].label} href={cta[0].link} target="_blank" rel="noopener noreferrer">
        <button>{cta[0].label}</button>
      </a>
    </div>
  )
}

export default Header