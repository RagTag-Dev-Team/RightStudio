// MUI imports
import MenuItem from '@mui/material/MenuItem'

// Component imports
import CustomTextField from '@core/components/mui/text-field/index'

const SelectSize = () => {
  return (
    <div className='flex gap-6'>
      <CustomTextField
        select
        fullWidth
        defaultValue=''
        label='Small'
        id='custom-select-small'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        size='medium'
        defaultValue=''
        label='Medium'
        id='custom-select-medium'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
    </div>
  )
}

export default SelectSize
