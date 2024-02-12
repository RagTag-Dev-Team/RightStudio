// Component Imports
import CustomTextField from '@core/components/mui/text-field'
import CustomAutocomplete from '@core/components/mui/autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteCustom = () => {
  return (
    <div className='flex gap-6'>
      <CustomAutocomplete
        fullWidth
        options={top100Films}
        id='autocomplete-custom'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField placeholder='Placeholder' {...params} label='Default' />}
      />
      <CustomAutocomplete
        disabled
        fullWidth
        options={top100Films}
        id='autocomplete-custom-disabled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Disabled' />}
      />
      <CustomAutocomplete
        readOnly
        fullWidth
        options={top100Films}
        id='autocomplete-custom-readOnly'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='readOnly' />}
      />
    </div>
  )
}

export default AutocompleteCustom
