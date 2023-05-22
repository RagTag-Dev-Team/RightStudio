'use client'

// React Imports
import { forwardRef } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { LinkProps } from 'next/link'

// Third Party Imports
import classNames from 'classnames'

// Util Imports
import { menuClasses } from '../utils/utilityClasses'

interface RouterLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
}

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  const { href, className, ...other } = props

  const pathname = usePathname()
  const exactMatch = pathname === href ? true : false

  return (
    <Link ref={ref} href={href} className={classNames({ [menuClasses.active]: exactMatch }, className)} {...other}>
      {props.children}
    </Link>
  )
})
