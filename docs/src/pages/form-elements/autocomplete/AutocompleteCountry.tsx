// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { countries } from '../../../data/countries'

type CountryType = {
  code: string
  label: string
  phone: string
}

const AutocompleteCountry = () => {
  return (
    <Autocomplete
      autoHighlight
      id='autocomplete-country-select'
      options={countries as CountryType[]}
      getOptionLabel={option => option.label || ''}
      renderOption={(props, option) => (
        <Box component='li' {...props} key={option.label}>
          <img
          className='mie-4 flex-shrink-0'
            alt=''
            width='20'
            loading='lazy'
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          key={params.id}
          label='Choose a country'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  )
}

export default AutocompleteCountry
