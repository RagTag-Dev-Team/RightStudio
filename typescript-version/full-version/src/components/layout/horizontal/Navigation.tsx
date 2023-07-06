'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav from '../../../@menu-package/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'
import HorizontalMenu from './HorizontalMenu'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

// Style Imports
import styles from './styles.module.css'

const Navigation = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div
      {...(!isBreakpointReached && {
        className: classnames(horizontalLayoutClasses.navigation, styles.navigation),
        style: { paddingInline: themeConfig.layoutPadding }
      })}
    >
      <HorizontalNav
        switchToVertical
        verticalNavContent={VerticalNavContent}
        verticalNavProps={{ customStyles: { '& .ts-menu-button': { paddingBlock: '12px' } } }}
      >
        <HorizontalMenu />
      </HorizontalNav>
    </div>
  )
}

export default Navigation
