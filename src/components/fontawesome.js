import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram,
         faTwitter,
         faFacebook,
         faChrome,
         faYoutube } from '@fortawesome/free-brands-svg-icons'

import { config  } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

library.add(
  faInstagram,
  faTwitter,
  faFacebook,
  faChrome,
  faYoutube
)