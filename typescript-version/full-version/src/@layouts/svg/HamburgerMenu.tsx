// React Imports
import type { SVGAttributes } from 'react'

const HamburgerMenu = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fontSize='1.5rem' viewBox='0 0 24 24' {...props}>
      <path fill='currentColor' d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
    </svg>
  )
}

export default HamburgerMenu
