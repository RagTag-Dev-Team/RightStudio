// MUI Imports
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'

// Component Imports
import CustomTextField from '@core/components/mui/text-field'

const SelectGrouping = () => {
  return (
    <div className='flex gap-4'>
      <CustomTextField
        select
        fullWidth
        label='Grouping' 
        defaultValue='' 
        id='grouped-select'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <ListSubheader>Category 1</ListSubheader>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <ListSubheader>Category 2</ListSubheader>
        <MenuItem value={3}>Option 3</MenuItem>
        <MenuItem value={4}>Option 4</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        label='Grouping'
        defaultValue=''
        id='grouped-native-select'
        SelectProps={{ native: true }}
      >
        <option aria-label='None' value='' />
        <optgroup label='Category 1'>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
        </optgroup>
        <optgroup label='Category 2'>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </optgroup>
      </CustomTextField>
    </div>
  )
}

export default SelectGrouping;
