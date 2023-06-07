// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import HorizontalMenu from './HorizontalMenu'

// Styled Components Imports
import StyledNavbar from '../../../styles/StyledNavbar'

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavToggle />
      <NavSearch />
      <HorizontalMenu />
    </StyledNavbar>
  )
}

export default Navbar
