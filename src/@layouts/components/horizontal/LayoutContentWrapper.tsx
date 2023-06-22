// React Imports
import type { CSSProperties } from 'react'

// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/utilityClasses'

const contentAreaStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  inlineSize: '100%',
  overflow: 'hidden'
}

const LayoutContentWrapper = ({ children }: ChildrenType) => {
  return (
    <div className={horizontalLayoutClasses.contentWrapper} style={contentAreaStyles}>
      {children}
    </div>
  )
}

export default LayoutContentWrapper
