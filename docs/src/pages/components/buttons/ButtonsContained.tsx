// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ButtonsContained = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#' sx={{ '&:hover': { color: 'primary.contrastText' } }}>
        Link
      </Button>
    </Box>
  )
}

export default ButtonsContained
