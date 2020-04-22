import React from 'react'
import { useSettingsQuery } from '../queries/settings'

import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLinks = () => {

  const { links } = useSettingsQuery()

  const icons = {
    "Instagram": 'instagram',
    "Twitter": 'twitter',
    "Facebook": 'facebook',
    "Website": 'chrome',
    "YouTube": 'youtube',
  }

  return (
    <div style={linksStyle}>
      {links.map(link => (
        <a key={link.type} name={link.type} style={iconStyle} href={link.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', icons[link.type]]} size="3x"></FontAwesomeIcon>
        </a>
      ))}
    </div>
  )
}

const linksStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  padding: '0.25em 0',
}

const iconStyle = {
  color: '#FAAE2B'
}

export default SocialLinks
