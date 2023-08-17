// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ButtonsText = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>
        Secondary
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </Box>
  )
}

export default ButtonsText
