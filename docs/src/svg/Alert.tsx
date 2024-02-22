// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Alert = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width='1em' height='1em' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='10' y='76' width='180' height='48' rx='8' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.08'/>
      <path d='M36.884 90.532C36.538 89.878 35.462 89.878 35.116 90.532L26.116 107.532C26.0349 107.684 25.9948 107.855 25.9994 108.028C26.004 108.2 26.0532 108.369 26.1422 108.516C26.2312 108.664 26.357 108.786 26.5074 108.871C26.6577 108.956 26.8274 109 27 109H45C45.1724 109 45.342 108.956 45.4922 108.871C45.6424 108.787 45.7681 108.664 45.8571 108.517C45.946 108.369 45.9951 108.201 45.9997 108.028C46.0042 107.856 45.964 107.685 45.883 107.533L36.884 90.532ZM37 106H35V104H37V106ZM35 102V97H37L37.001 102H35Z' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.4'/>
      <rect x='58.5' y='88' width='60' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.4'/>
      <rect x='58.5' y='104' width='90' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.1'/>
      <path d='M177.493 87.2866L173.957 90.8216L170.422 87.2866L169.244 88.465L172.779 92L169.244 95.535L170.422 96.7133L173.957 93.1783L177.493 96.7133L178.672 95.535L175.137 92L178.672 88.465L177.493 87.2866Z' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.3'/>
    </svg>
  )
}

export default Alert
