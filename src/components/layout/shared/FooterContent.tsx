'use client'

// React Imports
import type { CSSProperties } from 'react'

// Next Imports
import Link from 'next/link'

// Hook Imports
import useLayout from '../../../@layouts/hooks/useLayout'
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Util Imports
import { layoutClasses } from '../../../@layouts/utils/utilityClasses'

const commonStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center'
}

const FooterContent = () => {
  const { layout } = useLayout()
  const { isBreakpointReached: isVerticalBreakpointReached } = useVerticalNav()
  const { isBreakpointReached: isHorizontalBreakpointReached } = useHorizontalNav()

  const isBreakpointReached = layout === 'vertical' ? isVerticalBreakpointReached : isHorizontalBreakpointReached

  return (
    <div className={layoutClasses.footerContent} style={{ ...commonStyles, justifyContent: 'space-between' }}>
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='https://themeselection.com' target='_blank' style={{ color: '#765feb' }}>
          ThemeSelection
        </Link>
      </p>
      {!isBreakpointReached && (
        <div style={{ ...commonStyles }}>
          <Link
            href='https://themeselection.com/license'
            target='_blank'
            style={{ color: '#765feb', marginInlineEnd: 16 }}
          >
            License
          </Link>
          <Link href='https://themeselection.com' target='_blank' style={{ color: '#765feb', marginInlineEnd: 16 }}>
            More Themes
          </Link>
          <Link href='/' target='_blank' style={{ color: '#765feb', marginInlineEnd: 16 }}>
            Documentation
          </Link>
          <Link href='https://themeselection.com/support' target='_blank' style={{ color: '#765feb' }}>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
