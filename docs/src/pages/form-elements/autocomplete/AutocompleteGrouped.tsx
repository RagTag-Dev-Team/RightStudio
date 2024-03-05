// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteGrouped = () => {
  const options = top100Films.map(option => {
    const firstLetter = option.title[0].toUpperCase()

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option
    }
  })

  return (
    <CustomAutocomplete
      id='autocomplete-grouped'
      groupBy={option => option.firstLetter}
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='With categories' />}
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
    />
  )
}

export default AutocompleteGrouped
