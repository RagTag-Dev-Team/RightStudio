// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const More = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="46" y="86" width="28" height="28" rx="14" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.2"/>
      <rect x="86" y="86" width="28" height="28" rx="14" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.2"/>
      <rect x="126" y="86" width="28" height="28" rx="14" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.2"/>
    </svg>
  )
}

export default More
