// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Autocomplete = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="76" width="180" height="48" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="23" y="88" width="70" height="24" rx="12" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="23" y="88" width="24" height="24" rx="12" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M32 96.3333C32 97.9873 33.346 99.3333 35 99.3333C36.654 99.3333 38 97.9873 38 96.3333C38 94.6793 36.654 93.3333 35 93.3333C33.346 93.3333 32 94.6793 32 96.3333ZM40.3333 106H41V105.333C41 102.761 38.906 100.667 36.3333 100.667H33.6667C31.0933 100.667 29 102.761 29 105.333V106H40.3333Z" fill="white" fillOpacity="0.4"/>
      <path d="M171.651 97.0674L167 101.718L162.349 97.0674L160.817 98.5993L167 104.782L173.183 98.5993L171.651 97.0674Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Autocomplete
