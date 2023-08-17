// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsVariants = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Chip label='Basic' />
      <Chip label='Outlined' variant='outlined' />
    </Box>
  )
}

export default ChipsVariants
