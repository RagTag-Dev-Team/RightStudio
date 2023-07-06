'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
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
      <HorizontalMenu />
    </div>
  )
}

export default Navigation
