// React Imports
import React from 'react'

// MUI Imports
import Zoom from '@mui/material/Zoom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import type { TooltipProps } from '@mui/material/Tooltip'

const LightTooltip = styled((props: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: props.className }} className='mie-4' />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: 4,
    boxShadow: theme.shadows[2],
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white
  }
}))

const OutsideTooltip = () => {
  return (
    <>
      <Tooltip title='Tooltip' className='mie-4'>
        <Button variant='outlined'>Button</Button>
      </Tooltip>
      <LightTooltip title='Light'>
        <Button variant='outlined'>Light</Button>
      </LightTooltip>
      <Tooltip arrow title='Arrow' className='mie-4'>
        <Button variant='outlined'>Arrow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title='Zoom'>
        <Button variant='outlined'>Zoom</Button>
      </Tooltip>
    </>
  )
}

export default OutsideTooltip
