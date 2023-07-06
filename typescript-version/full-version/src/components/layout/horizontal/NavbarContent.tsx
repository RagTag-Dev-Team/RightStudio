'use client'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import Logo from '../shared/Logo'
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import Translation from '../shared/Translation'
import ModeSwitcher from '../shared/ModeSwitcher'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

const NavbarContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={classnames(
        horizontalLayoutClasses.navbarContent,
        'd-flex align-items-center justify-content-between gap-4 width-100'
      )}
    >
      <div className='d-flex align-items-center gap-4'>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>

      <div className='d-flex align-items-center gap-4'>
        <NavSearch />
        <Translation />
        <ModeSwitcher />
        {/* Language Dropdown, Notification Dropdown, quick access menu dropdown, user dropdown will be placed here */}
      </div>
    </div>
  )
}

export default NavbarContent
