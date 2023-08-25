'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalMenu from './HorizontalMenu'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'
import useHorizontalNav from '@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Style Imports
import styles from './styles.module.css'

const Navigation = () => {
  // Hooks
  const { settings } = useSettings()
  const { isBreakpointReached } = useHorizontalNav()

  const headerContentCompact = settings.navbarContentWidth === 'compact'

  return (
    <div
      {...(!isBreakpointReached && {
        className: classnames(horizontalLayoutClasses.navigation, 'flex', styles.navigation)
      })}
    >
      <div
        {...(!isBreakpointReached && {
          className: classnames(horizontalLayoutClasses.navigationContentWrapper, 'flex items-center is-full', {
            [styles.headerContentCompact]: headerContentCompact
          }),
          style: { paddingInline: themeConfig.layoutPadding }
        })}
      >
        <HorizontalMenu />
      </div>
    </div>
  )
}

export default Navigation
