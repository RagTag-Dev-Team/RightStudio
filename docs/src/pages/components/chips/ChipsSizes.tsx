// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsSizes = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Chip label='Default' />
      <Chip label='Small' size='small' />
    </Box>
  )
}

export default ChipsSizes
