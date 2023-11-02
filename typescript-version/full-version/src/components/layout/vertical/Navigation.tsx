'use client'

// MUI Imports
import { useColorScheme } from '@mui/material/styles'

// Type Imports
import type { Dictionary } from '@core/types'

// Component Imports from @menu-package
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu-package/vertical-menu'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'
import useSettings from '@core/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

const Navigation = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const { isHovered, isCollapsed } = useVerticalNav()
  const { settings, saveSettings } = useSettings()
  const { mode, systemMode } = useColorScheme()

  const handleClick = () => {
    if (isCollapsed) {
      saveSettings({ layout: 'vertical' })
    } else {
      saveSettings({ layout: 'collapsed' })
    }
  }

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles()}
      backgroundColor='var(--mui-palette-background-paper)'
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(settings.semiDark &&
        (mode === 'light' || systemMode === 'light') && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        {!(isCollapsed && !isHovered) && <NavCollapseIcons onClick={handleClick} />}
      </NavHeader>
      <VerticalMenu dictionary={dictionary} />
    </VerticalNav>
  )
}

export default Navigation
