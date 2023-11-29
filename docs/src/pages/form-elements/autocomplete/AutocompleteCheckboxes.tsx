// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteCheckboxes = () => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={top100Films}
      id='autocomplete-checkboxes'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <TextField {...params} key={params.id} label='Checkboxes' placeholder='Favorites' />}
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
