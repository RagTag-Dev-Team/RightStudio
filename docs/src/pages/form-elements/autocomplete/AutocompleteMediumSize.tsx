// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteMediumSize = () => {
  return (
    <div>
      <CustomAutocomplete
        options={top100Films}
        id='autocomplete-size-medium'
        defaultValue={top100Films[13]}
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Size medium' placeholder='Favorites' size='medium' />}
      />
      <CustomAutocomplete
        multiple
        className='mbs-5'
        options={top100Films}
        defaultValue={[top100Films[13]]}
        id='autocomplete-size-medium-multi'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Size medium' placeholder='Favorites' size='medium' />}
      />
    </div>
  )
}

export default AutocompleteMediumSize
