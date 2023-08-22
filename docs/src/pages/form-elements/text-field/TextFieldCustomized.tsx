// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MuiInputBase from '@mui/material/InputBase'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import type { InputBaseProps } from '@mui/material/InputBase'

// Styled InputBase component
const InputBase = styled(MuiInputBase)<InputBaseProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
  '& .MuiInputBase-input': {
    fontSize: 16,
    borderRadius: 4,
    padding: '10px 12px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: theme.palette.mode === 'light' ? '1px solid #ced4da' : `1px solid ${theme.palette.divider}`,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `rgb(${theme.vars.palette.primary.mainChannel} / 0.25) 0 0 0 0.2rem`
    }
  }
}))

const TextFieldCustomized = () => {
  return (
    <Box component='form' noValidate autoComplete='off' sx={{ display: 'flex', gap: 4 }}>
      <FormControl fullWidth variant='standard'>
        <InputLabel shrink htmlFor='bootstrap-input' sx={{ transform: 'translate(0, -4px) scale(0.75)' }}>
          Bootstrap
        </InputLabel>
        <InputBase defaultValue='react-bootstrap' id='bootstrap-input' />
      </FormControl>
    </Box>
  )
}

export default TextFieldCustomized
