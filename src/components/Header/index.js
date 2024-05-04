import {Link} from 'react-router-dom'

import {NavBar, LogoImage} from './styledComponents'

const Header = () => (
  <NavBar>
    <Link to="/">
      <LogoImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavBar>
)

export default Header
