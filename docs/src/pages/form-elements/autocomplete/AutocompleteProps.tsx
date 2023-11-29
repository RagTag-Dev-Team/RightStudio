// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteProps = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Autocomplete
        disableCloseOnSelect
        options={top100Films}
        id='autocomplete-disableCloseOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='disableCloseOnSelect' />}
      />
      <Autocomplete
        clearOnEscape
        options={top100Films}
        id='autocomplete-clearOnEscape'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='clearOnEscape' />}
      />
      <Autocomplete
        disableClearable
        options={top100Films}
        id='autocomplete-disableClearable'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='disableClearable' />}
      />
      <Autocomplete
        openOnFocus
        options={top100Films}
        id='autocomplete-openOnFocus'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='openOnFocus' />}
      />
      <Autocomplete
        autoHighlight
        options={top100Films}
        id='autocomplete-autoHighlight'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='autoHighlight' />}
      />
      <Autocomplete
        autoSelect
        options={top100Films}
        id='autocomplete-autoSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='autoSelect' />}
      />
      <Autocomplete
        blurOnSelect
        options={top100Films}
        id='autocomplete-blurOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='blurOnSelect' />}
      />
      <Autocomplete
        clearOnBlur
        options={top100Films}
        id='autocomplete-clearOnBlur'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='clearOnBlur' />}
      />
    </div>
  )
}

export default AutocompleteProps
