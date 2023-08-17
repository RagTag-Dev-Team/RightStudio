// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteVariants = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Autocomplete
        options={top100Films}
        id='autocomplete-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' />}
      />
      <Autocomplete
        options={top100Films}
        id='autocomplete-filled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='filled' />}
      />
      <Autocomplete
        options={top100Films}
        id='autocomplete-default'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='standard' />}
      />
      <Autocomplete
        disabled
        options={top100Films}
        id='autocomplete-disabled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Disabled' />}
      />
    </Box>
  )
}

export default AutocompleteVariants
