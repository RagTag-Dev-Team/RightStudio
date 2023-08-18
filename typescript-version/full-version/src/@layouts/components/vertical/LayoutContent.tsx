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
import styles from '../../styles/content.module.css'

const LayoutContent = ({ children }: ChildrenType) => {
  const { settings } = useSettings()

  const contentCompact = settings.contentWidth === 'compact'
  const contentWide = settings.contentWidth === 'wide'

  return (
    <main
      className={classnames(verticalLayoutClasses.content, 'flex-auto', {
        [`${verticalLayoutClasses.contentCompact} is-full ${styles.contentCompact}`]: contentCompact,
        [verticalLayoutClasses.contentWide]: contentWide
      })}
      style={{ padding: themeConfig.layoutPadding }}
    >
      {children}
    </main>
  )
}

export default LayoutContent
