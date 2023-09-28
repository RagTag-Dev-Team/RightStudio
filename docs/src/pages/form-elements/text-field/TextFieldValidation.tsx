// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldValidation = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-4 flex-col'>
      <TextField error id='validation-error' label='Error' defaultValue='Hello World' />
      <TextField
        error
        label='Error'
        defaultValue='Hello World'
        helperText='Incorrect entry.'
        id='validation-error-helper-text'
      />
    </Box>
  )
}

export default TextFieldValidation
