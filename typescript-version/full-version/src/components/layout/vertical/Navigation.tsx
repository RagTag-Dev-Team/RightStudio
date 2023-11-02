'use client'

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

const Navigation = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const { isHovered, isCollapsed } = useVerticalNav()
  const { saveSettings } = useSettings()

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
    <VerticalNav customStyles={{ zIndex: 'var(--drawer-z-index)' }}>
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
