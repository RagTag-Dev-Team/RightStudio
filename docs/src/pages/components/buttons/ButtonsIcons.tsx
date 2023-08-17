// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const ButtonsIcons = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
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
    </Box>
  )
}

export default ButtonsIcons
