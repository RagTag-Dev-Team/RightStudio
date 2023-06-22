// Component Imports
import Navigation from './Navigation'
import NavbarContent from './NavbarContent'
import Navbar from '../../../@layouts/components/horizontal/Navbar'
import LayoutHeader from '../../../@layouts/components/horizontal/Header'

const Header = () => {
  return (
    <LayoutHeader>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Navigation />
    </LayoutHeader>
  )
}

export default Header
