// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteVariants = () => {
  return (
    <div className='flex gap-6'>
      <Autocomplete
        fullWidth
        options={top100Films}
        id='autocomplete-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' />}
      />
      <Autocomplete
        fullWidth
        options={top100Films}
        id='autocomplete-filled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='filled' />}
      />
      <Autocomplete
        fullWidth
        options={top100Films}
        id='autocomplete-default'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='standard' />}
      />
      <Autocomplete
        fullWidth
        disabled
        options={top100Films}
        id='autocomplete-disabled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Disabled' />}
      />
    </div>
  )
}

export default AutocompleteVariants
