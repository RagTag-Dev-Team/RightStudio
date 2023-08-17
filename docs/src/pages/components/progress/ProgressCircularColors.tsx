// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const ProgressCircularColors = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='error' />
      <CircularProgress color='warning' />
      <CircularProgress color='info' />
    </Box>
  )
}

export default ProgressCircularColors
