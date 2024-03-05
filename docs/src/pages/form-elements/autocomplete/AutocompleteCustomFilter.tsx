// MUI Imports
import { createFilterOptions } from '@mui/material/Autocomplete'

// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

// Data Imports
import { top100Films } from '../../../data/top100films'

type FilmOptionType = {
  year: number
  title: string
}

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title
})

const AutocompleteCustomFilter = () => {
  return (
    <CustomAutocomplete
      options={top100Films}
      filterOptions={filterOptions}
      id='autocomplete-custom-filter'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='Custom filter' />}
    />
  )
}

export default AutocompleteCustomFilter
