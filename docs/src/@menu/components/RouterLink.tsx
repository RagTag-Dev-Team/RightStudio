'use client'

// React Imports
import { forwardRef } from 'react'

// Next Imports
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

// Type Imports
import type { ChildrenType } from '../types'

// type RouterLinkProps = LinkProps &
//   Partial<ChildrenType> & {
//     className?: string
//   }

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string
}

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  // Props
  const { href, className, ...other } = props

  return (
    <Link ref={ref} to={href} className={className} {...other}>
      {props.children}
    </Link>
  )
})
