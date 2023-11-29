// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteFreeSolo = () => {
  return (
    <Autocomplete
      freeSolo
      id='autocomplete-free-solo'
      options={top100Films.map(option => option.title)}
      renderInput={params => <TextField {...params} label='Free Solo' />}
    />
  )
}

export default AutocompleteFreeSolo
