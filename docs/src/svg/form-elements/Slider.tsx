// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Slider = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="20" y="95" width="160" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="20" y="95" width="106.335" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="107" y="86" width="28" height="28" rx="14" fill="white"/>
      <rect x="107" y="86" width="28" height="28" rx="14" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.68"/>
    </svg>
  )
}

export default Slider
