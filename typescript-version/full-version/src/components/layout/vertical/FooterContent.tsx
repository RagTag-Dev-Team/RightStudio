'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'
import useSettings from '../../../@core/hooks/useSettings'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/layoutClasses'

// Style Imports
import styles from './styles.module.css'

const FooterContent = () => {
  const { settings } = useSettings()
  const { isBreakpointReached: isVerticalBreakpointReached } = useVerticalNav()
  const { isBreakpointReached: isHorizontalBreakpointReached } = useHorizontalNav()

  const isBreakpointReached =
    settings.layout === 'vertical' ? isVerticalBreakpointReached : isHorizontalBreakpointReached

  return (
    <div
      className={classnames(
        verticalLayoutClasses.footerContent,
        'd-flex align-items-center justify-content-between flex-wrap gap-16px'
      )}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='https://themeselection.com' target='_blank' className={styles.primaryColor}>
          ThemeSelection
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='d-flex align-items-center gap-16px'>
          <Link href='https://themeselection.com/license' target='_blank' className={styles.primaryColor}>
            License
          </Link>
          <Link href='https://themeselection.com' target='_blank' className={styles.primaryColor}>
            More Themes
          </Link>
          <Link href='/' target='_blank' className={styles.primaryColor}>
            Documentation
          </Link>
          <Link href='https://themeselection.com/support' target='_blank' className={styles.primaryColor}>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
