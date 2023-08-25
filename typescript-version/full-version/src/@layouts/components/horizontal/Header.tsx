'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Style Imports
import styles from './header.module.css'

const Header = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  const headerFixed = themeConfig.navbar.type === 'fixed'
  const headerStatic = themeConfig.navbar.type === 'static'
  const headerBlur = themeConfig.navbar.blur === true
  const headerContentCompact = settings.navbarContentWidth === 'compact'
  const headerContentWide = settings.navbarContentWidth === 'wide'

  return (
    <header
      className={classnames(horizontalLayoutClasses.header, styles.header, {
        [`${horizontalLayoutClasses.headerFixed} ${styles.headerFixed}`]: headerFixed,
        [horizontalLayoutClasses.headerStatic]: headerStatic,
        [`${horizontalLayoutClasses.headerBlur} ${styles.headerBlur}`]: headerBlur,
        [`${horizontalLayoutClasses.headerContentCompact} ${styles.headerContentCompact}`]: headerContentCompact,
        [horizontalLayoutClasses.headerContentWide]: headerContentWide
      })}
    >
      {children}
    </header>
  )
}

export default Header
