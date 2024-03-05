// MUI Imports
import Chip from '@mui/material/Chip'

// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

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
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option.title} {...(getTagProps({ index }) as {})} key={index} size='small' />
        ))
      }
    />
  )
}

export default AutocompleteLimitTags
