// This is User Component (Not a core component)
import { CSSProperties, ReactNode } from 'react'

// Import Third Party Components

type ContentAreaProps = {
  children?: ReactNode
}

const ContentAreaStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  inlineSize: '100%',
  overflow: 'hidden',
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return <div className='content-wrapper' style={ContentAreaStyles}>{children}</div>
}

export default ContentArea
