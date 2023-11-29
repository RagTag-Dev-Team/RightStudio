// React Imports
import { useState } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

type FilmOptionType = {
  year?: number
  title: string
  inputValue?: string
}

const filter = createFilterOptions<FilmOptionType>()

const AutocompleteCreatable = () => {
  // States
  const [value, setValue] = useState<FilmOptionType | null>(null)

  return (
    <Autocomplete
      freeSolo
      clearOnBlur
      value={value}
      handleHomeEndKeys
      options={top100Films}
      id='autocomplete-free-solo-with-text'
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderInput={params => <TextField {...params} label='Free solo with text demo' />}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option || ''
        }
        if ((option as FilmOptionType).inputValue as string) {
          return ((option as FilmOptionType).inputValue as string) || ''
        }

        return (option.title as string) || ''
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue
          })
        } else if (newValue && (newValue as any).inputValue) {
          setValue({
            title: (newValue as any).inputValue
          })
        } else {
          setValue(newValue)
        }
      }}
      filterOptions={(options: FilmOptionType[], params: any) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some((option: FilmOptionType) => inputValue === option.title)

        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`
          })
        }

        return filtered
      }}
    />
  )
}

export default AutocompleteCreatable
