// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsDisabled = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Chip label='Basic' disabled />
      <Chip label='Outlined' variant='outlined' disabled />
    </Box>
  )
}

export default ChipsDisabled
