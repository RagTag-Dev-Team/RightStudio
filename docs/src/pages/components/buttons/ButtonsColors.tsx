// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ButtonsColors = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button color='success'>Success</Button>
        <Button color='error'>Error</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='outlined' color='success'>
          Success
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
      </Box>
    </Box>
  )
}

export default ButtonsColors
