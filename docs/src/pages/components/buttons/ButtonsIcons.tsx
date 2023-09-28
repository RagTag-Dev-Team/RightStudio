// React Imports
import React from 'react'

// MUI Imports
import IconButton from '@mui/material/IconButton'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsIcons = () => {
  return (
    <div className='flex gap-4'>
      <IconButton aria-label='capture screenshot'>
        <Icon icon='mdi:camera-iris' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='primary'>
        <Icon icon='mdi:camera-iris' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='secondary'>
        <Icon icon='mdi:camera-iris' />
      </IconButton>
      <IconButton aria-label='capture screenshot' disabled>
        <Icon icon='mdi:camera-iris' />
      </IconButton>
    </div>
  )
}

export default ButtonsIcons
