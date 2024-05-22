'use client'

// React Imports
import { forwardRef } from 'react'

// Next Imports
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string
}

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  // Props
  const { href, className, target, ...other } = props

  return target ? (
    <a ref={ref} href={href} className={className} target={target} {...other}>
      {props.children}
    </a>
  ) : (
    <Link ref={ref} to={href} className={className} {...other}>
      {props.children}
    </Link>
  )
})
