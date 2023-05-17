'use client'

import { forwardRef } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { menuClasses } from '../utils/utilityClasses'
import { usePathname } from '../hooks/usePathname'
import classNames from 'classnames'

interface RouterLinkProps extends LinkProps {
  className?: string
}

/**
 * This is a wrapper over `next/link` component.
 * We use this to help us maintain consistency between CRA and Next.js
 */
export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  const { href, className, ...other } = props

  const pathname = usePathname()
  const exactMatch = pathname === href ? true : false

  return <Link ref={ref} href={href} className={classNames({ [menuClasses.active]: exactMatch }, className)} {...other} />
})

/* // Import React
import { forwardRef } from 'react'

// Import Third-party
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// Import types
import type { LinkProps } from 'react-router-dom'

// Import hooks
import { usePathname } from '../@menu-package/hooks/usePathname'

// Import utils
import { menuClasses } from '../@menu-package/utils/utilityClasses'

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string
} */

/**
 * This is an adapted for `react-router-dom/link` component.
 * We use this to help us maintain consistency between CRA and Next.js
 */
// export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
//   const { href, className, ...other } = props

//   const pathname = usePathname()
//   const exactMatch = pathname === href ? true : false

//   return <Link ref={ref} to={href} className={classNames({ [menuClasses.active]: exactMatch }, className)} {...other} />
// })
