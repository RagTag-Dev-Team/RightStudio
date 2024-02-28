// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Pagination = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="32" cy="100" rx="15" ry="15" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <path d="M33.1853 94.7686L27.9539 100L33.1853 105.231L34.4814 103.935L30.5462 100L34.4814 96.0648L33.1853 94.7686Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M166.815 105.231L172.046 100L166.815 94.7686L165.519 96.0647L169.454 100L165.519 103.935L166.815 105.231Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <ellipse cx="66" cy="100" rx="15" ry="15" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <ellipse cx="134" cy="100" rx="15" ry="15" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <ellipse cx="100" cy="100" rx="15" ry="15" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <ellipse cx="168" cy="100" rx="15" ry="15" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
    </svg>
  )
}

export default Pagination
