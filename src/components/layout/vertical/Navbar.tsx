// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import HorizontalMenu from './HorizontalMenu'
import Translation from '../shared/Translation'
import ModeSwitcher from '../shared/ModeSwitcher'

// Styled Components Imports
import StyledNavbar from '../../../styles/StyledNavbar'

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavToggle />
      <NavSearch />
      <HorizontalMenu />
      <div style={{ display: 'flex' }}>
        <Translation />
        <ModeSwitcher />
      </div>
    </StyledNavbar>
  )
}

export default Navbar
