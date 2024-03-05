// React Imports
import { useState } from 'react'

// MUI Imports
import MenuItem from '@mui/material/MenuItem'
import type { SelectChangeEvent } from '@mui/material/Select'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const SelectControlledUncontrolled = () => {
  // States
  const [value, setValue] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <div className='flex gap-4'>
      <CustomTextField
        select
        fullWidth
        defaultValue=''
        value={value}
        label='Controlled'
        id='controlled-select'
        SelectProps={{
          onChange: handleChange
        }}
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
        defaultValue='' 
        label='Uncontrolled' 
        id='uncontrolled-select' 
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

export default SelectControlledUncontrolled
