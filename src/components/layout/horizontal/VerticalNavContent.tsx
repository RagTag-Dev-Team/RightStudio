// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Component Imports
import NavHeader from '../../../@layouts/components/vertical/NavHeader'
import Logo from '../shared/Logo'
import NavCollapseIcons from '../../../@layouts/components/vertical/NavCollapseIcons'

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
