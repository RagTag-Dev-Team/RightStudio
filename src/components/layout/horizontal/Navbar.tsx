'use client'

// Components Imports
import NavToggle from '../../../@layouts/components/horizontal/NavToggle'

// Styled Components Imports
import StyledNavbar from '../../../styles/StyledNavbar'
import Logo from '../shared/Logo'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'
import NavSearch from '../shared/NavSearch'
import ModeSwitcher from '../shared/ModeSwitcher'

const Navbar = () => {
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
