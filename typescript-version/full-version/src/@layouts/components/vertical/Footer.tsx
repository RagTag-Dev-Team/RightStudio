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
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

// Style Imports
import styles from './footer.module.css'

const Footer = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  const footerDetached = themeConfig.footer.detached === true
  const footerAttached = themeConfig.footer.detached === false
  const footerStatic = themeConfig.footer.type === 'static'
  const footerFixed = themeConfig.footer.type === 'fixed'
  const footerContentCompact = settings.footerContentWidth === 'compact'
  const footerContentWide = settings.footerContentWidth === 'wide'

  return (
    <footer
      className={classnames(verticalLayoutClasses.footer, 'is-full', {
        [`${verticalLayoutClasses.footerDetached} ${styles.footerDetached}`]: footerDetached,
        [`${verticalLayoutClasses.footerAttached} ${styles.footerAttached}`]: footerAttached,
        [verticalLayoutClasses.footerStatic]: footerStatic,
        [`${verticalLayoutClasses.footerFixed} ${styles.footerFixed}`]: footerFixed,
        [`${verticalLayoutClasses.footerContentCompact} ${styles.footerContentCompact}`]: footerContentCompact,
        [verticalLayoutClasses.footerContentWide]: footerContentWide
      })}
      style={{ ...(footerFixed && footerDetached && { paddingInline: themeConfig.layoutPadding }) }}
    >
      <div
        className={classnames(verticalLayoutClasses.footerContentWrapper, styles.contentWrapper)}
        style={{ paddingInline: themeConfig.layoutPadding }}
      >
        {children}
      </div>
    </footer>
  )
}

export default Footer
