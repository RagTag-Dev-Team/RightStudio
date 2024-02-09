// MUI Imports
import Card from '@mui/material/Card'
import Zoom from '@mui/material/Zoom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import type { TooltipProps } from '@mui/material/Tooltip'

const LightTooltip = styled((props: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: props.className }} className='mie-4' />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: 'var(--mui-customShadows-sm)',
    color: 'var(--mui-palette-common-black)',
    backgroundColor: 'var(--mui-palette-common-white)'
  }
})

const CardTooltip = () => {
  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default CardTooltip
