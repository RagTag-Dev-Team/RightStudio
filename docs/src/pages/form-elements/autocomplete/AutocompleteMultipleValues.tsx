// MUI Imports
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteMultipleValues = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Autocomplete
        multiple
        options={top100Films}
        filterSelectedOptions
        defaultValue={[top100Films[13]]}
        id='autocomplete-multiple-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='filterSelectedOptions' placeholder='Favorites' />}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option.title} {...(getTagProps({ index }) as {})} key={index} size='small' />
          ))
        }
      />
      <Autocomplete
        freeSolo
        multiple
        id='autocomplete-multiple-filled'
        defaultValue={[top100Films[13].title]}
        options={top100Films.map(option => option.title)}
        renderInput={params => <TextField {...params} variant='filled' label='freeSolo' placeholder='Favorites' />}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip variant='outlined' label={option} size='small' {...(getTagProps({ index }) as {})} key={index} />
          ))
        }
      />
      <Autocomplete
        multiple
        options={top100Films}
        defaultValue={[top100Films[13]]}
        id='autocomplete-multiple-standard'
        getOptionLabel={option => option.title || ''}
        renderInput={params => (
          <TextField {...params} label='Multiple values' placeholder='Favorites' variant='standard' />
        )}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option.title} {...(getTagProps({ index }) as {})} key={index} size='small' />
          ))
        }
      />
    </div>
  )
}

export default AutocompleteMultipleValues
