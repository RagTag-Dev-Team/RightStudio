// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
import CustomTextField from '@core/components/mui/text-field'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteFreeSolo = () => {
  return (
    <CustomAutocomplete
      freeSolo
      id='autocomplete-free-solo'
      options={top100Films.map(option => option.title)}
      renderInput={params => <CustomTextField {...params} label='Free Solo' />}
    />
  )
}

export default AutocompleteFreeSolo
