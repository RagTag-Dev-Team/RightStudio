'use client'

// MUI Imports
import { useColorScheme } from '@mui/material/styles'

// Type Imports
import type { getDictionary } from '@/utils/get-dictionary'
import type { Settings } from '@core/contexts/settingsContext'
import type { Mode, SystemMode } from '@core/types'

// Component Imports from @menu-package
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu-package/vertical-menu'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

type Props = {
  settingsCookie: Settings
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  mode: Mode
  systemMode: SystemMode
}

const Navigation = (props: Props) => {
  // Props
  const { settingsCookie, dictionary, mode, systemMode } = props

  // Hooks
  const { isHovered, isCollapsed } = useVerticalNav()
  const { settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()

  const isServer = typeof window === 'undefined'

  let isSemiDark, isDark

  if (isServer) {
    isSemiDark = settingsCookie.semiDark || false
    isDark = mode === 'system' ? systemMode === 'dark' : mode === 'dark'
  } else {
    isSemiDark = settings.semiDark
    isDark = muiMode === 'system' ? muiSystemMode === 'dark' : muiMode === 'dark'
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
      {...(isSemiDark &&
        !isDark && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        {!(isCollapsed && !isHovered) && <NavCollapseIcons />}
      </NavHeader>
      <VerticalMenu dictionary={dictionary} />
    </VerticalNav>
  )
}

export default Navigation
