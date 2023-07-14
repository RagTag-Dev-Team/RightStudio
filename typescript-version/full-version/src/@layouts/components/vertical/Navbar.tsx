'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Hook Imports
import useSettings from '../../../@core/hooks/useSettings'

// Util Imports
import { verticalLayoutClasses } from '../../utils/layoutClasses'

// Style Imports
import styles from './header.module.css'

const Navbar = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  const headerFixed = themeConfig.navbar.type === 'fixed'
  const headerStatic = themeConfig.navbar.type === 'static'
  const headerFloating = themeConfig.navbar.floating === true
  const headerDetached = themeConfig.navbar.detached === true
  const headerAttached = themeConfig.navbar.detached === false
  const headerBlur = themeConfig.navbar.blur === true
  const headerContentCompact = settings.navbarContentWidth === 'compact'
  const headerContentWide = settings.navbarContentWidth === 'wide'

  return (
    <header
      className={classnames(
        verticalLayoutClasses.header,
        'd-flex align-items-center justify-content-center width-100',
        styles.header,
        {
          [`${verticalLayoutClasses.headerFixed} ${styles.headerFixed}`]: headerFixed,
          [verticalLayoutClasses.headerStatic]: headerStatic,
          [`${verticalLayoutClasses.headerFloating} ${styles.headerFloating}`]: headerFloating,
          [`${verticalLayoutClasses.headerDetached} ${styles.headerDetached}`]: !headerFloating && headerDetached,
          [`${verticalLayoutClasses.headerAttached} ${styles.headerAttached}`]: !headerFloating && headerAttached,
          [`${verticalLayoutClasses.headerBlur} ${styles.headerBlur}`]: headerBlur,
          [`${verticalLayoutClasses.headerContentCompact} ${styles.headerContentCompact}`]: headerContentCompact,
          [verticalLayoutClasses.headerContentWide]: headerContentWide
        }
      )}
    >
      <div
        className={classnames(verticalLayoutClasses.navbar, styles.navbar)}
        style={{
          paddingInline: themeConfig.layoutPadding,
          width:
            headerFloating || (headerFixed && headerDetached)
              ? `calc(100% - ${2 * themeConfig.layoutPadding}px)`
              : '100%',
          ...(headerContentCompact &&
            (headerFloating || (headerFixed && headerDetached)
              ? {
                  maxInlineSize: `calc(1440px - ${2 * themeConfig.layoutPadding}px)`
                }
              : {
                  maxInlineSize: '1440px'
                }))
        }}
      >
        {children}
      </div>
    </header>
  )
}

export default Navbar
