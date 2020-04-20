import React from 'react'

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>Built by <a href="https://instagram.com/andyhxng" target="_blank" rel="noopener noreferrer"><span style={spanStyle}>Andy Hong</span></a></p>
    </div>
  )
}

const footerStyle = {
  margin: '2em 0',
  fontSize: '1em',
}

const spanStyle = {
  color: '#FAAE2B',
  fontWeight: '700',
}

export default Footer
