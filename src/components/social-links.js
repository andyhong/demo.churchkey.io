import React from 'react'

import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLinks = (props) => {

  const icons = {
    "Instagram": 'instagram',
    "Twitter": 'twitter',
    "Facebook": 'facebook',
    "Website": 'chrome',
    "YouTube": 'youtube',
  }

  return (
    <div className="socialWrapper">
      {props.links.map(link => (
        <a key={link.type} aria-label={link.type} href={link.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', icons[link.type]]} size="3x"></FontAwesomeIcon>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
