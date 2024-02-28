// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Dialogs = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="45" width="180" height="110" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="24" y="60" width="80" height="12" rx="6" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="128" y="127" width="50" height="18" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="71" y="127" width="50" height="18" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="24" y="83" width="143" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="24" y="97" width="100" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
    </svg>
  )
}

export default Dialogs
