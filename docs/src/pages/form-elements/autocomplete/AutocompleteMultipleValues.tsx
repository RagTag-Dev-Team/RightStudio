// MUI Imports
import Chip from '@mui/material/Chip'

// Components Imports
import CustomAutocomplete from '@core/components/mui/autocomplete'
import CustomTextField from '@core/components/mui/text-field'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteMultipleValues = () => {
  return (
    <div className='flex gap-6'>
      <CustomAutocomplete
        fullWidth
        multiple
        options={top100Films}
        filterSelectedOptions
        defaultValue={[top100Films[13]]}
        id='autocomplete-multiple-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='filterSelectedOptions' placeholder='Favorites' />}
      />
      <CustomAutocomplete
        fullWidth
        freeSolo
        multiple
        id='autocomplete-multiple-filled'
        defaultValue={[top100Films[13].title]}
        options={top100Films.map(option => option.title)}
        renderInput={params => <CustomTextField {...params} variant='filled' label='freeSolo' placeholder='Favorites' />}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip variant='outlined' label={option} size='small' {...(getTagProps({ index }) as {})} key={index} />
          ))
        }
      />
      <CustomAutocomplete
        fullWidth
        multiple
        options={top100Films}
        defaultValue={[top100Films[13]]}
        id='autocomplete-multiple-standard'
        getOptionLabel={option => option.title || ''}
        renderInput={params => (
          <CustomTextField {...params} label='Multiple values' placeholder='Favorites' variant='standard' />
        )}
      />
    </div>
  )
}

export default AutocompleteMultipleValues
