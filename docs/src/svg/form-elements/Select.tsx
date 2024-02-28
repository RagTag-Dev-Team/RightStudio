// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Select = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="76" width="180" height="48" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="27.5" y="96" width="70" height="8" rx="4" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M171.651 97.0674L167 101.718L162.349 97.0674L160.817 98.5993L167 104.782L173.183 98.5993L171.651 97.0674Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Select
