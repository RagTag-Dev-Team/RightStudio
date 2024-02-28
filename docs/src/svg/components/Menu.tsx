// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Menu = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="28" y="72" width="143" height="96" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="41" y="85" width="86" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="41" y="106" width="118" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="41" y="127" width="43" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="41" y="148" width="79" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="55" y="33" width="90" height="33" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="71" y="45" width="58" height="10" rx="5" fill="white" fillOpacity="0.6"/>
    </svg>
  )
}

export default Menu
