// React Imports
import type { CSSProperties } from 'react'

// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '../shared/NavSearch'
import HorizontalMenu from './HorizontalMenu'
import Translation from '../shared/Translation'
import ModeSwitcher from '../shared/ModeSwitcher'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/utilityClasses'

const commonStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}

const NavbarContent = () => {
  return (
    <div className={verticalLayoutClasses.navbarContent} style={{ ...commonStyles, justifyContent: 'space-between' }}>
      <div style={commonStyles}>
        <NavToggle />
        <NavSearch />
        <HorizontalMenu />
      </div>
      <div style={commonStyles}>
        <Translation />
        <ModeSwitcher />
      </div>
    </div>
  )
}

export default NavbarContent
