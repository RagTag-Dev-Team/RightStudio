// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Badges = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M135 80.6521C140.733 79.2978 145 74.1472 145 68C145 60.8203 139.18 55 132 55C126.216 55 121.314 58.7775 119.627 64H73C68.5817 64 65 67.5817 65 72V126C65 130.418 68.5817 134 73 134H127C131.418 134 135 130.418 135 126V80.6521Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M132 81C139.18 81 145 75.1797 145 68C145 60.8203 139.18 55 132 55C124.82 55 119 60.8203 119 68C119 75.1797 124.82 81 132 81Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M136.993 71.3369H135.446V74H132.792V71.3369H127.308V69.4473L132.941 61.1504H135.446V69.2275H136.993V71.3369ZM132.792 69.2275V67.0479C132.792 66.6846 132.807 66.1572 132.836 65.4658C132.865 64.7744 132.889 64.373 132.906 64.2617H132.836C132.619 64.7422 132.358 65.2109 132.054 65.668L129.698 69.2275H132.792Z" fill="white" fillOpacity="0.99"/>
    </svg>
  )
}

export default Badges
