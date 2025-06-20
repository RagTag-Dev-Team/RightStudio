// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Editor = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="20" y="63" width="160" height="75" rx="8" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.08"/>
      <path d="M34.1667 80.6666H35.8334V79H38.5434L36.4001 89H34.1667V90.6666H40.8334V89H38.9567L41.1001 79H44.1667V80.6666H45.8334V77.3333H34.1667V80.6666Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M68.2175 83.35C68.7216 82.7016 68.9968 81.9046 69 81.0833C69 79.0158 67.3175 77.3333 65.25 77.3333H59V89.8333H65.6667C67.7342 89.8333 69.4167 88.1508 69.4167 86.0833C69.4155 85.5697 69.3085 85.0619 69.1021 84.5916C68.8958 84.1213 68.5946 83.6986 68.2175 83.35ZM65.25 79.8333C65.9392 79.8333 66.5 80.3941 66.5 81.0833C66.5 81.7725 65.9392 82.3333 65.25 82.3333H61.5V79.8333H65.25ZM65.6667 87.3333H61.5V84.8333H65.6667C66.3558 84.8333 66.9167 85.3941 66.9167 86.0833C66.9167 86.7725 66.3558 87.3333 65.6667 87.3333Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M82.1667 89H93.8334V90.6666H82.1667V89ZM83.0001 77.3333V82.3333C83.0001 85.0908 85.2426 87.3333 88.0001 87.3333C90.7576 87.3333 93.0001 85.0908 93.0001 82.3333V77.3333H91.3334V82.3333C91.3334 84.1716 89.8384 85.6666 88.0001 85.6666C86.1617 85.6666 84.6667 84.1716 84.6667 82.3333V77.3333H83.0001Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <path d="M105.333 79.8333H113.667V81.5H105.333V79.8333ZM105.333 76.5H118.667V78.1667H105.333V76.5ZM105.333 83.1667H113.667V84.8333H105.333V83.1667ZM105.333 86.5H113.667V88.1667H105.333V86.5ZM105.333 89.8333H118.667V91.5H105.333V89.8333ZM118.667 87.3333V80.6667L115.333 84L118.667 87.3333Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
    </svg>
  )
}

export default Editor
