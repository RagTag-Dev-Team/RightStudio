// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

type FilmOptionType = {
  year: number
  title: string
}

const AutocompleteControlledUncontrolled = () => {
  // States
  const [value, setValue] = useState<FilmOptionType | null>(null)

  const handleChange = (event: SyntheticEvent, newValue: FilmOptionType | null) => {
    setValue(newValue)
  }

  return (
    <div className='flex gap-4 flex-col'>
      <Autocomplete
        value={value}
        options={top100Films}
        onChange={handleChange}
        id='autocomplete-controlled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Controlled' />}
      />
      <Autocomplete
        options={top100Films}
        id='autocomplete-uncontrolled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Uncontrolled' />}
      />
    </div>
  )
}

export default AutocompleteControlledUncontrolled
