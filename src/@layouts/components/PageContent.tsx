// React Imports
import type { CSSProperties } from 'react'

// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

const contentAreaStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  inlineSize: '100%',
  overflow: 'hidden'
}

const PageContent = ({ children }: ChildrenType) => {
  return (
    <div className='content-wrapper' style={contentAreaStyles}>
      {children}
    </div>
  )
}

export default PageContent
