'use client'

// React Imports
import type { CSSProperties } from 'react'

// Components Imports
import Logo from '../shared/Logo'
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import Translation from '../shared/Translation'
import ModeSwitcher from '../shared/ModeSwitcher'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/utilityClasses'

const commonStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}

const NavbarContent = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      className={horizontalLayoutClasses.navbarContent}
      style={{ ...commonStyles, justifyContent: 'space-between', inlineSize: '100%' }}
    >
      <div style={commonStyles}>
        <NavToggle />
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
      </div>

      <div style={commonStyles}>
        <NavSearch />
        <Translation />
        <ModeSwitcher />
        {/* Language Dropdown, Notification Dropdown, quick access menu dropdown, user dropdown will be placed here */}
      </div>
    </div>
  )
}

export default NavbarContent
