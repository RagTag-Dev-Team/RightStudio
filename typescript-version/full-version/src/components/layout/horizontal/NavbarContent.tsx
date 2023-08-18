'use client'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import Logo from '../shared/Logo'
import NavToggle from './NavToggle'
import NavSearch from '../shared/search'
import Translation from '../shared/Translation'
import ModeSwitcher from '../../../@layouts/components/ModeSwitcher'
import UserDetails from '../../../@layouts/components/UserDetails'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

const NavbarContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={classnames(horizontalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}
    >
      <div className='flex items-center gap-4'>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>

      <div className='flex items-center gap-4'>
        <NavSearch />
        <Translation />
        <ModeSwitcher />
        <UserDetails />
        {/* Language Dropdown, Notification Dropdown, quick access menu dropdown, user dropdown will be placed here */}
      </div>
    </div>
  )
}

export default NavbarContent
