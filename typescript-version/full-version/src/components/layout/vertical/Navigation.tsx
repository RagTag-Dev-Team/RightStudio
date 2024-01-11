'use client'

// Type Imports
import Logo from '@components/layout/shared/Logo'

import type { getDictionary } from '@/utils/get-dictionary'

// Component Imports
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu/vertical-menu'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const Navigation = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const { isHovered, isCollapsed } = useVerticalNav()

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav customStyles={{ zIndex: 'var(--drawer-z-index)' }}>
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
