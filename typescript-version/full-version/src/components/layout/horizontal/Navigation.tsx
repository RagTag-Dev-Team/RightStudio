'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Dictionary } from '@core/types'

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

const Navigation = ({ dictionary }: { dictionary: Dictionary }) => {
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
        <HorizontalMenu dictionary={dictionary} />
      </div>
    </div>
  )
}

export default Navigation
