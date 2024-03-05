// MUI Imports
import MenuItem from '@mui/material/MenuItem'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const SelectProps = () => {
  return (
    <div className='flex gap-6'>
      <CustomTextField
        fullWidth
        select
        defaultValue=''
        label='Age'
        id='select-helper'
        helperText='With label + helper text'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        select
        label='Age'
        defaultValue=''
        id='select-autoWidth'
        helperText='Auto width'
        SelectProps={{ autoWidth: true }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        select
        disabled
        label='Age'
        defaultValue=''
        helperText='Disabled'
        id='select-props-disabled'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        error
        select
        defaultValue=''
        label='Age'
        id='select-error'
        helperText='Error'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        select
        label='Age'
        defaultValue=''
        helperText='Read only'
        id='select-props-readOnly'
        SelectProps={{ readOnly: true }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        select
        required
        defaultValue=''
        label='Age'
        id='select-required'
        helperText='Required'
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        fullWidth
        select
        defaultValue=''
        id='select-without-label'
        helperText='Without label'
        SelectProps={{ displayEmpty: true }}
        inputProps={{ 'aria-label': 'Without label' }}
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

export default SelectProps
