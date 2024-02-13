// MUI Imports
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteSmallSize = () => {
  return (
    <div>
      <Autocomplete
        size='small'
        options={top100Films}
        id='autocomplete-size-small'
        defaultValue={top100Films[13]}
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Size small' placeholder='Favorites' />}
      />
      <Autocomplete
        multiple
        size='small'
        className='mbs-5'
        options={top100Films}
        defaultValue={[top100Films[13]]}
        id='autocomplete-size-small-multi'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Size small' placeholder='Favorites' />}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option.title} {...(getTagProps({ index }) as {})} key={index} size='small' />
          ))
        }
      />
    </div>
  )
}

export default AutocompleteSmallSize
