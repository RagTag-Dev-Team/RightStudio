// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Snackbar = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="19" y="125" width="161" height="42" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="31.5" y="142" width="90" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M165.144 141.758L161.962 144.94L158.78 141.758L157.72 142.819L160.901 146L157.72 149.182L158.78 150.242L161.962 147.061L165.144 150.242L166.204 149.182L163.023 146L166.204 142.819L165.144 141.758Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.3"/>
      <path d="M8 124L8 168C8 173.523 12.4772 178 18 178H58" stroke={`rgb(${theme.palette.text.primaryChannel})`} strokeOpacity="0.12"/>
    </svg>
    
  )
}

export default Snackbar
