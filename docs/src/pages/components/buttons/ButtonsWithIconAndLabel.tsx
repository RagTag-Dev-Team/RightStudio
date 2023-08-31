// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsWithIconAndLabel = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Button variant='contained' endIcon={<Icon icon='mdi:send' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<Icon icon='mdi:delete-outline' />}>
        Delete
      </Button>
    </Box>
  )
}

export default ButtonsWithIconAndLabel
