// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Shadows = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="100" cy="100" r="50" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M100 61C89.6566 61 79.7368 65.1089 72.4228 72.4228C65.1089 79.7368 61 89.6566 61 100C61 110.343 65.1089 120.263 72.4228 127.577C79.7367 134.891 89.6566 139 100 139L100 100L100 61Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.42"/>
    </svg>
  )
}

export default Shadows
