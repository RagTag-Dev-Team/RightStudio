//* This is User Component (Not a core component)

// React Imports
import type { CSSProperties, ReactNode } from 'react'

type ContentAreaProps = {
  children?: ReactNode
}

const contentAreaStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  inlineSize: '100%',
  overflow: 'hidden'
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return (
    <div className='content-wrapper' style={contentAreaStyles}>
      {children}
    </div>
  )
}

export default ContentArea
