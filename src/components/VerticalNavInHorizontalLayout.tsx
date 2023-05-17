// Import React
import { ReactNode } from 'react'

// Import Third Party Components
// import PerfectScrollbar from 'react-perfect-scrollbar'
import PerfectScrollbar from '../@menu-package/wrapper-componnents/perfectscrollbar'

// Import Vertical Menu Component
import VerticalNav from '../@menu-package/components/vertical-menu'

// Import Custom Components
import MenuHeader from './MenuHeader'
import VerticalNavCollapseIcons from './VerticalNavCollapseIcons'

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
