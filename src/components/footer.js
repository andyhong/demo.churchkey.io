import React from 'react'

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>Provided by <a href="https://churchkey.netlify.app" target="_blank" rel="noopener noreferrer"><span style={spanStyle}>churchkey</span></a></p>
    </div>
  )
}

const footerStyle = {
  color: '#191545',
}

const spanStyle = {
  color: '#191545',
  fontWeight: '900',
  fontSize: '1.2em',
}

export default Footer
