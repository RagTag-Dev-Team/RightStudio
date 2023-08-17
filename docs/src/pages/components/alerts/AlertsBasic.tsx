// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

const AlertsBasic = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Alert severity='warning'>This is a warning alert — check it out!</Alert>
      <Alert severity='info'>This is an info alert — check it out!</Alert>
      <Alert severity='success'>This is a success alert — check it out!</Alert>
    </Box>
  )
}

export default AlertsBasic
