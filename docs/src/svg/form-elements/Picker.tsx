// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Picker = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="36" width="180" height="139" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="34" y="64" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="34" y="97" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="34" y="130" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="69" y="64" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.42"/>
      <rect x="69" y="97" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="69" y="130" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="105" y="64" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="140" y="64" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="150" y="25" width="4" height="22" rx="2" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.42"/>
      <rect x="46" y="25" width="4" height="22" rx="2" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.42"/>
      <rect x="105" y="97" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="140" y="97" width="26" height="26" rx="13" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
    </svg>
  )
}

export default Picker
