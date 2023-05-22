// React Imports
import type { ReactNode } from 'react'

// Component Imports
import MenuHeader from './MenuHeader'
import VerticalNavCollapseIcons from './VerticalNavCollapseIcons'
import VerticalNav from '../@menu-package/components/vertical-menu'
import PerfectScrollbar from '../@menu-package/wrapper-componnents/perfectscrollbar'

const VerticalNavInHorizontalLayout = ({ children }: { children: ReactNode }) => (
  <VerticalNav backgroundColor='rgba(255,255,0,1)'>
    <MenuHeader>
      Logo
      <VerticalNavCollapseIcons />
    </MenuHeader>
    <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  </VerticalNav>
)

export default VerticalNavInHorizontalLayout
