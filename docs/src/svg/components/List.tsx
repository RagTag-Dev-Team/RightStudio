// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const List = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="30" width="180" height="140" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <rect x="25" y="47" width="124" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="10" y="65" width="180" height="22" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.04"/>
      <rect x="25" y="71" width="87" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="167" y="71" width="10" height="10" rx="2" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="25" y="95" width="105" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="25" y="119" width="50" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
      <rect x="25" y="143" width="93" height="10" rx="5" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.12"/>
    </svg>
  )
}

export default List
