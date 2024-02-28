// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Timeline = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="111" y="62" width="42" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="97" y="62" width="10" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="97" y="84" width="10" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="97" y="106" width="10" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="26" y="84" width="67" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="97" y="128" width="10" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="61" y="128" width="32" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="111" y="106" width="63" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="101" y="74" width="2" height="8" rx="1" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="101" y="96" width="2" height="8" rx="1" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="101" y="118" width="2" height="8" rx="1" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
    </svg>
  )
}

export default Timeline
