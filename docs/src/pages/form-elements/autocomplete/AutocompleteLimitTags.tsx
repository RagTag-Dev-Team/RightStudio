// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
import CustomTextField from '@core/components/mui/text-field'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteLimitTags = () => {
  return (
    <CustomAutocomplete
      multiple
      limitTags={2}
      options={top100Films}
      id='autocomplete-limit-tags'
      getOptionLabel={option => option.title || ''}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={params => <CustomTextField {...params} label='limitTags' placeholder='Favorites' />}
    />
  )
}

export default AutocompleteLimitTags
