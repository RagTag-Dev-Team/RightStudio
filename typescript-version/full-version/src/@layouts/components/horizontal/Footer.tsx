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
import { horizontalLayoutClasses } from '../../utils/layoutClasses'

// Style Imports
import styles from './footer.module.css'

const Footer = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  const footerStatic = themeConfig.footer.type === 'static'
  const footerFixed = themeConfig.footer.type === 'fixed'
  const footerContentCompact = settings.footerContentWidth === 'compact'
  const footerContentWide = settings.footerContentWidth === 'wide'

  return (
    <footer
      className={classnames(horizontalLayoutClasses.footer, {
        [horizontalLayoutClasses.footerStatic]: footerStatic,
        [`${horizontalLayoutClasses.footerFixed} ${styles.footerFixed}`]: footerFixed,
        [`${horizontalLayoutClasses.footerContentCompact} ${styles.footerContentCompact}`]: footerContentCompact,
        [`${horizontalLayoutClasses.footerContentWide} ${styles.footerContentWide}`]: footerContentWide
      })}
    >
      <div
        className={classnames(horizontalLayoutClasses.footerContentWrapper, styles.contentWrapper)}
        style={{ paddingInline: themeConfig.layoutPadding }}
      >
        {children}
      </div>
    </footer>
  )
}

export default Footer
