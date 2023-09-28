// React Imports
import React, { useState } from 'react'

// MUI Imports
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'

const SelectControlledUncontrolled = () => {
  // States
  const [value, setValue] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <div className='flex gap-4 flex-col'>
      <FormControl fullWidth>
        <InputLabel id='controlled-select-label'>Controlled</InputLabel>
        <Select
          value={value}
          label='Controlled'
          id='controlled-select'
          onChange={handleChange}
          labelId='controlled-select-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id='uncontrolled-select-label'>Uncontrolled</InputLabel>
        <Select defaultValue='' label='Uncontrolled' id='uncontrolled-select' labelId='uncontrolled-select-label'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectControlledUncontrolled
