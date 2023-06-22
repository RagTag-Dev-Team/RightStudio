'use client'

// React Imports
import type { CSSProperties } from 'react'

// Component Imports
import HorizontalMenu from './HorizontalMenu'

// Config Imports
import config from '../../../@layouts/config'

// Hook Imports
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/utilityClasses'

const styles: CSSProperties = {
  minBlockSize: '64px',
  paddingBlock: '9px',
  paddingInline: `${config.layoutPadding}px`,
  borderBlockStart: '1px solid #efefef'
}

const Navigation = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div {...(!isBreakpointReached && { className: horizontalLayoutClasses.navigation, style: styles })}>
      <HorizontalMenu />
    </div>
  )
}

export default Navigation
