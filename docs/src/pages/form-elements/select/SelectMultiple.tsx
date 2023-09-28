// React Imports
import React, { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import type { SelectChangeEvent } from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const SelectMultiple = () => {
  // States
  const [personName, setPersonName] = useState<string[]>([])
  const [personNameNative, setPersonNameNative] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
  }

  const handleChangeMultipleNative = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target
    const value: string[] = []

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonNameNative(value)
  }

  return (
    <div className='flex gap-4 flex-col'>
      <div>
        <Typography className='mbe-2 font-medium'>Default</Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-name-label'>Name</InputLabel>
          <Select
            multiple
            label='Name'
            value={personName}
            MenuProps={MenuProps}
            id='demo-multiple-name'
            onChange={handleChange}
            labelId='demo-multiple-name-label'
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography className='mbe-2 font-medium'>Checkmarks</Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
          <Select
            multiple
            label='Tag'
            value={personName}
            MenuProps={MenuProps}
            onChange={handleChange}
            id='demo-multiple-checkbox'
            labelId='demo-multiple-checkbox-label'
            renderValue={selected => (selected as unknown as string[]).join(', ')}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography className='mbe-2 font-medium'>Chip</Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-multiple-chip-label'>Chip</InputLabel>
          <Select
            multiple
            label='Chip'
            value={personName}
            MenuProps={MenuProps}
            id='demo-multiple-chip'
            onChange={handleChange}
            labelId='demo-multiple-chip-label'
            renderValue={selected => (
              <div className='flex flex-wrap gap-1'>
                {(selected as unknown as string[]).map(value => (
                  <Chip key={value} label={value} size='small' />
                ))}
              </div>
            )}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography className='mbe-2 font-medium'>Placeholder</Typography>
        <FormControl fullWidth>
          <Select
            multiple
            displayEmpty
            value={personName}
            MenuProps={MenuProps}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            renderValue={selected => {
              if ((selected as unknown as string[]).length === 0) {
                return <em>Placeholder</em>
              }

              return (selected as unknown as string[]).join(', ')
            }}
          >
            <MenuItem disabled value=''>
              <em>Placeholder</em>
            </MenuItem>
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography className='mbe-2 font-medium'>Native</Typography>
        <FormControl fullWidth>
          <InputLabel shrink htmlFor='select-multiple-native'>
            Native
          </InputLabel>
          <Select
            native
            multiple
            label='Native'
            value={personNameNative} // @ts-ignore
            onChange={handleChangeMultipleNative}
            inputProps={{ id: 'select-multiple-native' }}
          >
            {names.map(name => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default SelectMultiple
