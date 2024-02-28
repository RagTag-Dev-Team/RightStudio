// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Swiper = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="35" y="60" width="130" height="80" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M177.491 106.658L184.15 100L177.491 93.3418L175.842 94.9915L180.85 100L175.842 105.008L177.491 106.658Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.3"/>
      <path d="M94.7488 98.8333C95.7153 98.8333 96.4988 98.0498 96.4988 97.0833C96.4988 96.1168 95.7153 95.3333 94.7488 95.3333C93.7823 95.3333 92.9988 96.1168 92.9988 97.0833C92.9988 98.0498 93.7823 98.8333 94.7488 98.8333Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M98.2488 102.333L96.4988 100L92.9988 104.667H106.999L101.749 97.6667L98.2488 102.333Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M109.332 90.6667H90.6656C89.3788 90.6667 88.3323 91.7132 88.3323 93V107C88.3323 108.287 89.3788 109.333 90.6656 109.333H109.332C110.619 109.333 111.666 108.287 111.666 107V93C111.666 91.7132 110.619 90.6667 109.332 90.6667ZM90.6656 107V93H109.332L109.335 107H90.6656Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M22.5085 93.3418L15.8504 100L22.5085 106.658L24.1582 105.009L19.1497 100L24.1582 94.9915L22.5085 93.3418Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.3"/>
    </svg>
  )
}

export default Swiper
