// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Typography = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="100" cy="100" r="50" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M79.1667 88.0953H85.1191V82.1429H94.7976L87.1429 117.857H79.1667V123.81H102.976V117.857H96.2738L103.929 82.1429H114.881V88.0953H120.833V76.1905H79.1667V88.0953Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>    
  )
}

export default Typography
