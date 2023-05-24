'use client'

// React Imports
import { forwardRef } from 'react'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { LinkProps } from 'next/link'

// Third Party Imports
import classNames from 'classnames'

// Type Imports
import type { ChildrenType } from '../types'

// Util Imports
import { menuClasses } from '../utils/utilityClasses'

type RouterLinkProps = LinkProps &
  Partial<ChildrenType> & {
    className?: string
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
