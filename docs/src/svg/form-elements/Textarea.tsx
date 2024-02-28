// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Textarea = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="40" width="180" height="120" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="25" y="55" width="63" height="12" rx="6" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="25" y="78" width="112" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="25" y="92" width="78" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="179" y="51" width="98" height="4" rx="2" transform="rotate(90 179 51)" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="179" y="88" width="24" height="4" rx="2" transform="rotate(90 179 88)" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
    </svg>
  )
}

export default Textarea
