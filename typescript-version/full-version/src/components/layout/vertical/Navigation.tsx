'use client'

// MUI Imports
import { useColorScheme } from '@mui/material'

// Component Imports from @menu-package
import VerticalNav, { NavHeader, NavCollapseIcons } from '../../../@menu-package/vertical-menu'

// Component Imports
import Logo from '../shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useSettings from '../../../@core/hooks/useSettings'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

const Navigation = () => {
  // Hooks
  const { settings } = useSettings()
  const { mode, systemMode } = useColorScheme()
  const { isBreakpointReached } = useHorizontalNav()

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      backgroundColor='var(--mui-palette-background-paper)'
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(settings.semiDark &&
        (mode === 'light' || systemMode === 'light') && {
          'data-mui-color-scheme': 'dark',
          customStyles: { color: 'var(--mui-palette-text-primary)' }
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
        <NavCollapseIcons />
      </NavHeader>
      <VerticalMenu />
    </VerticalNav>
  )
}

export default Navigation
