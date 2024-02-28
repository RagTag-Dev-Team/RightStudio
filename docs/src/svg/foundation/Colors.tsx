// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Colors = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="100" cy="100" r="50" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M123.81 105.946C123.536 106.14 117.857 112.146 117.857 116.363C117.857 120.81 120.682 123.649 123.81 123.804C126.506 123.935 129.762 121.152 129.762 116.363C129.762 111.899 124.083 106.14 123.81 105.946ZM74.4464 102.97C74.4464 104.56 75.0655 106.054 76.1905 107.179L92.8155 123.804C93.9405 124.929 95.4345 125.548 97.0238 125.548C98.6131 125.548 100.107 124.929 101.232 123.804L122.065 102.97L119.961 100.866L97.0238 77.9286L90.1994 71.1042L85.9911 75.3125L92.8155 82.1369L76.1905 98.7619C75.0655 99.8869 74.4464 101.381 74.4464 102.97ZM97.0238 86.3453L113.649 102.97L97.0238 119.595H97.0268L97.0238 122.571V119.595L80.3988 102.97L97.0238 86.3453Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Colors
