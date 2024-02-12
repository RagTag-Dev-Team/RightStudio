// MUI Imports
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
          <Checkbox checked={selected} className='mie-2' />
          {option.title}
        </li>
      )}
    />
  )
}

export default AutocompleteCheckboxes
