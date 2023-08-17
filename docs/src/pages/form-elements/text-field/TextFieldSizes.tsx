// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldSizes = () => {
  return (
    <Box component='form' noValidate autoComplete='off' sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', flexDirection: 'column' }}>
      <TextField label='Size' id='size-small' defaultValue='Small' size='small' />
      <TextField label='Size' id='size-normal' defaultValue='Normal' />
    </Box>
  )
}

export default TextFieldSizes
