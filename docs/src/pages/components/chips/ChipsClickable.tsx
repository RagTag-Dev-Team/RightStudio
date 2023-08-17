// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ChipsClickable = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Chip label='Clickable' onClick={handleClick} />
      <Chip label='Clickable Link' component='a' href='https://themeselection.com/' target='_blank' clickable />
    </Box>
  )
}

export default ChipsClickable
