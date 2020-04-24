import React from 'react'
import SocialLinks from './social-links'
import { useSettingsQuery } from '../queries/settings'

import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  const { name, message, cta } = useSettingsQuery()

  return (
    <div className="headerWrapper">
      <FontAwesomeIcon icon={`church`} size="4x" style={{color: 'FAAE2B'}}></FontAwesomeIcon>
      <h1>{name}</h1>
      <SocialLinks />
      <p>{message}</p>
      <a style={{width: '100%', padding: '0.5em 0'}} name={cta[0].label} href={cta[0].link} target="_blank" rel="noopener noreferrer">
        <button>{cta[0].label}</button>
      </a>
    </div>
  )
}

export default Header