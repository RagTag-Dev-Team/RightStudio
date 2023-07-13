import React, { useState } from 'react'
import type { ReactNode } from 'react'

import TsToJsCodeSnippet from '../ts-js-code'

export type CardSnippetProps = {
  title: string
  children: ReactNode
  code: string
  id?: string
  className?: string
}

const CardSnippet = (props: CardSnippetProps) => {
  const { id, className, title, code, children } = props
  const [showCode, setShowCode] = useState(false)

  return (
    <div className={`card-snippet ${className}`} id={id || `card-snippet--${title.toLowerCase().replace(/ /g, '-')}`}>
      <div className='card-header'>
        <h2 className='title'>{title}</h2>
        <div className='code-toggle' onClick={() => setShowCode(!showCode)}>
          👩‍💻
        </div>
      </div>
      <div className='card-content'>{children}</div>
      <div className='card-code' style={{ ...(showCode && { blockSize: 'auto' }) }}>
        <hr className='divider-line' />
        <div className='card-content'>
          <TsToJsCodeSnippet>{code}</TsToJsCodeSnippet>
        </div>
      </div>
    </div>
  )
}

export default CardSnippet
