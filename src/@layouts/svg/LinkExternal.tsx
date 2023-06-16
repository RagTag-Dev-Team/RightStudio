// React Imports
import type { SVGAttributes } from 'react'

const LinkExternal = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fontSize='1.5rem' viewBox='0 0 24 24' {...props}>
      <path fill='currentColor' d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z'></path>
      <path
        fill='currentColor'
        d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'
      ></path>
    </svg>
  )
}

export default LinkExternal
