// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Switch = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="50" y="72" width="100" height="56" rx="28" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="101" y="80" width="40" height="40" rx="20" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Switch
