import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faChrome, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useSettingsQuery } from '../queries/settings'

const SocialLinks = () => {

  const { links } = useSettingsQuery()

  const icons = {
    "Instagram": faInstagram,
    "Twitter": faTwitter,
    "Facebook": faFacebook,
    "Website": faChrome,
    "YouTube": faYoutube,
  }

  return (
    <div style={linksStyle}>
      {links.map(link => (
        <a key={link.type} style={iconStyle} href={link.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons[link.type]} size="3x"></FontAwesomeIcon>
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
