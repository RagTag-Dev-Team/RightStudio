'use client'

// Components Imports
import Logo from '../shared/Logo'
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import ModeSwitcher from '../shared/ModeSwitcher'

// Styled Components Imports
import StyledNavbar from '../../../styles/StyledNavbar'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

const Navbar = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <StyledNavbar>
      <div className='ts-nav-left'>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>

      <div className='ts-nav-right'>
        <NavSearch />
        <ModeSwitcher />
      </div>
      {/* Search, Language Dropdown, Notification Dropdown, quick access menu dropdown, user dropdown will be placed here */}
    </StyledNavbar>
  )
}

export default Navbar
