// Components Imports
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteProps = () => {
  return (
    <div className='flex gap-6 flex-wrap'>
      <CustomAutocomplete
        className='is-[250px]'
        disableCloseOnSelect
        options={top100Films}
        id='autocomplete-disableCloseOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='disableCloseOnSelect' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        clearOnEscape
        options={top100Films}
        id='autocomplete-clearOnEscape'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='clearOnEscape' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        disableClearable
        options={top100Films}
        id='autocomplete-disableClearable'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='disableClearable' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        openOnFocus
        options={top100Films}
        id='autocomplete-openOnFocus'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='openOnFocus' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        autoHighlight
        options={top100Films}
        id='autocomplete-autoHighlight'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='autoHighlight' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        autoSelect
        options={top100Films}
        id='autocomplete-autoSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='autoSelect' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        blurOnSelect
        options={top100Films}
        id='autocomplete-blurOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='blurOnSelect' />}
      />
      <CustomAutocomplete
        className='is-[250px]'
        clearOnBlur
        options={top100Films}
        id='autocomplete-clearOnBlur'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='clearOnBlur' />}
      />
    </div>
  )
}

export default AutocompleteProps
