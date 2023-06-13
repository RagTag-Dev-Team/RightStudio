'use client'

// Component Imports from @menu-package
import VerticalNav from '../../../@menu-package/components/vertical-menu'

// Component Imports from @layouts
import NavHeader from '../../../@layouts/components/vertical/NavHeader'
import NavCollapseIcons from '../../../@layouts/components/vertical/NavCollapseIcons'

// Component Imports
import Logo from '../shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

const Navigation = () => {
  const { isBreakpointReached } = useHorizontalNav()

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav backgroundImage='/assets/01.jpg' backgroundColor='rgba(255,255,0,0.8)'>
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
