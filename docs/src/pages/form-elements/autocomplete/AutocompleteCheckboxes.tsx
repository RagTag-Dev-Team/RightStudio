// MUI Imports
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'

// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
import CustomTextField from '@core/components/mui/text-field'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteCheckboxes = () => {
  return (
    <CustomAutocomplete
      multiple
      disableCloseOnSelect
      options={top100Films}
      id='autocomplete-checkboxes'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} key={params.id} label='Checkboxes' placeholder='Favorites' />}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option.title}>
          <Checkbox key={option.title} checked={selected} className='mie-2' />
          {option.title}
        </li>
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option.title} {...(getTagProps({ index }) as {})} key={index} size='small' />
        ))
      }
    />
  )
}

export default AutocompleteCheckboxes
