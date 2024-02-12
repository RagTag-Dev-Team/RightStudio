// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// Components Imports
import CustomTextField from '@core/components/mui/text-field'
import CustomAutocomplete from '@core/components/mui/autocomplete'

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
    <div className='flex gap-6'>
      <CustomAutocomplete
        fullWidth
        value={value}
        options={top100Films}
        onChange={handleChange}
        id='autocomplete-controlled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Controlled' />}
      />
      <CustomAutocomplete
        fullWidth
        options={top100Films}
        id='autocomplete-uncontrolled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Uncontrolled' />}
      />
    </div>
  )
}

export default AutocompleteControlledUncontrolled
