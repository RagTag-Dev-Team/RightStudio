// MUI Imports
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const SelectNative = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <FormControl fullWidth>
        <InputLabel htmlFor='outlined-age-native-basic'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-basic'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant='filled' fullWidth>
        <InputLabel htmlFor='filled-age-native-basic'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'filled-age-native-basic'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant='standard' fullWidth>
        <InputLabel htmlFor='age-native-basic'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'age-native-basic'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectNative
