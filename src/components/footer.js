import React from 'react'

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>Built by <a href="https://instagram.com/andyhxng" name="Andy Hong" target="_blank" rel="noopener noreferrer"><span style={spanStyle}>Andy Hong</span></a></p>
    </div>
  )
}

const footerStyle = {
  margin: '2em 0',
  fontSize: '1em',
}

const spanStyle = {
  color: '#191545',
  fontWeight: '700',
}

export default Footer
