import { library } from '@fortawesome/fontawesome-svg-core'
import { faChurch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,
         faTwitter,
         faFacebook,
         faChrome,
         faYoutube } from '@fortawesome/free-brands-svg-icons'

import { config  } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

library.add(
  faChurch,
  faInstagram,
  faTwitter,
  faFacebook,
  faChrome,
  faYoutube
)