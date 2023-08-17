// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsColors = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Typography sx={{ fontWeight: 500 }}>Filled Chips</Typography>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Chip label='Primary' color='primary' />
        <Chip label='Secondary' color='secondary' />
        <Chip label='Success' color='success' />
        <Chip label='Error' color='error' />
        <Chip label='Warning' color='warning' />
        <Chip label='Info' color='info' />
      </Box>
      <Typography sx={{ fontWeight: 500 }}>Outlined Chips</Typography>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Chip label='Primary' color='primary' variant='outlined' />
        <Chip label='Secondary' color='secondary' variant='outlined' />
        <Chip label='Success' color='success' variant='outlined' />
        <Chip label='Error' color='error' variant='outlined' />
        <Chip label='Warning' color='warning' variant='outlined' />
        <Chip label='Info' color='info' variant='outlined' />
      </Box>
    </Box>
  )
}

export default ChipsColors
