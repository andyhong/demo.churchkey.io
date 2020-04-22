import React from 'react'
import SocialLinks from './social-links'
import { useSettingsQuery } from '../queries/settings'

import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  const { name, message, cta } = useSettingsQuery()

  return (
    <div style={headerStyle}>
      <FontAwesomeIcon icon={`church`} size="4x" style={{color: 'FAAE2B'}}></FontAwesomeIcon>
      <h1>{name}</h1>
      <SocialLinks />
      <p>{message}</p>
      <a style={{width: '100%', padding: '0.5em 0'}} name={cta[0].label} href={cta[0].link} target="_blank" rel="noopener noreferrer">
        <button style={buttonStyle}>{cta[0].label}</button>
      </a>
    </div>
  )
}

const headerStyle = {
  maxWidth: '350px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const buttonStyle = {
  width: '100%',
  borderRadius: '30px',
  border: 'none',
  padding: '.5em 0',
  color: '#fff',
  backgroundColor: '#6cbede',
  fontSize: '1.5em',
  fontWeight: '900',
  cursor: 'pointer',
  fontFamily: 'Montserrat',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

export default Header