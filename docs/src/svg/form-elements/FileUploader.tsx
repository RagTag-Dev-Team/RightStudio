// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const FileUploader = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="20" y="63" width="160" height="75" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M98.8333 104.5H101.167V97.5H104.667L99.9999 91.6667L95.3333 97.5H98.8333V104.5Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M109.333 108H90.6666V99.8333H88.3333V108C88.3333 109.287 89.3798 110.333 90.6666 110.333H109.333C110.62 110.333 111.667 109.287 111.667 108V99.8333H109.333V108Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default FileUploader
