// React Imports
import { useState } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'

// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

// Data Imports
import { top100Films } from '../../../data/top100films'

// Type
type DataType = {
  year: number
  title: string
}

const fixedOptions = [top100Films[6]]

const AutocompleteFixedOptions = () => {
  // States
  const [value, setValue] = useState<DataType[]>([...fixedOptions, top100Films[13]])

  return (
    <CustomAutocomplete
      multiple
      value={value}
      options={top100Films}
      id='autocomplete-fixed-option'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='Fixed tag' placeholder='Favorites' />}
      onChange={(event, newValue) => {
        setValue([...fixedOptions, ...newValue.filter(option => fixedOptions.indexOf(option) === -1)])
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...(getTagProps({ index }) as {})}
            disabled={fixedOptions.indexOf(option) !== -1}
            key={index}
            size='small'
          />
        ))
      }
    />
  )
}

export default AutocompleteFixedOptions
