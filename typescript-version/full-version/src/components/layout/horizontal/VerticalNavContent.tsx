// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Component Imports
import NavHeader from '../../../@menu-package/components/vertical-menu/NavHeader'
import Logo from '../shared/Logo'
import NavCollapseIcons from '../../../@menu-package/components/vertical-menu/NavCollapseIcons'

// Util Imports
import { mapHorizontalToVerticalMenu } from '../../../@menu-package/utils/menuUtils'

const VerticalNavContent = ({ children }: ChildrenType) => {
  return (
    <>
      <NavHeader>
        <Logo />
        <NavCollapseIcons />
      </NavHeader>
      <PerfectScrollbar options={{ wheelPropagation: false }}>{mapHorizontalToVerticalMenu(children)}</PerfectScrollbar>
    </>
  )
}

export default VerticalNavContent
