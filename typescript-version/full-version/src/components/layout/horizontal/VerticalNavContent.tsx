// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import NavHeader from '@menu-package/components/vertical-menu/NavHeader'
import Logo from '@components/layout/shared/Logo'
import NavCollapseIcons from '@menu-package/components/vertical-menu/NavCollapseIcons'

// Hook Imports
import useHorizontalNav from '@menu-package/hooks/useHorizontalNav'

// Util Imports
import { mapHorizontalToVerticalMenu } from '@menu-package/utils/menuUtils'

const VerticalNavContent = ({ children }: ChildrenType) => {
  const { isBreakpointReached } = useHorizontalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <>
      <NavHeader>
        <Logo />
        <NavCollapseIcons />
      </NavHeader>
      <ScrollWrapper
        {...(isBreakpointReached
          ? {
              className: 'bs-full overflow-y-auto overflow-x-hidden'
            }
          : {
              options: { wheelPropagation: false, suppressScrollX: true }
            })}
      >
        {mapHorizontalToVerticalMenu(children)}
      </ScrollWrapper>
    </>
  )
}

export default VerticalNavContent
