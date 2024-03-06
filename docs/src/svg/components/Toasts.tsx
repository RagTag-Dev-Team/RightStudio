// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Toasts = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="16" y="29.9998" width="165" height="44" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="27.459" y="39.9998" width="60" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="27.459" y="55.9998" width="114" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.1"/>
      <path d="M171.048 38.028L168.131 40.9443L165.215 38.028L164.243 39.0001L167.159 41.9165L164.243 44.8328L165.215 45.805L168.131 42.8886L171.048 45.805L172.02 44.8328L169.104 41.9165L172.02 39.0001L171.048 38.028Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.3"/>
      <path d="M191 73.9998L191 29.9998C191 24.477 186.523 19.9998 181 19.9998L141 19.9998" stroke={`rgb(${theme.palette.text.primaryChannel})`} strokeOpacity="0.12"/>
    </svg>
  )
}

export default Toasts
