// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const ProgressLinearColors = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', gap: '1rem', flexDirection: 'column'  }}>
      <LinearProgress color='secondary' />
      <LinearProgress color='success' />
      <LinearProgress color='error' />
      <LinearProgress color='warning' />
      <LinearProgress color='info' />
    </Box>
  )
}

export default ProgressLinearColors
