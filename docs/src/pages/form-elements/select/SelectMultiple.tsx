// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import type { SelectChangeEvent } from '@mui/material/Select'

// Component Imports
import CustomTextField from '@core/components/mui/text-field'

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
        <CustomTextField
          select
          fullWidth
          label='Default'
          value={personName}
          id='select-multiple-default'
          SelectProps={{ MenuProps, multiple: true, onChange: handleChange}}

        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </div>
      <div>
        <CustomTextField
          select
          fullWidth
          label='Checkbox'
          value={personName}
          id='demo-multiple-checkbox'
          SelectProps={{ MenuProps,
            multiple: true,
            onChange: handleChange,
            renderValue: selected => (selected as unknown as string[]).join(', ')
          }}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </CustomTextField>
      </div>
      <div>
        <CustomTextField
          select
          fullWidth
          label='Chip'
          value={personName}
          id='demo-multiple-chip'
          SelectProps={{ 
            multiple: true,
            MenuProps,
            onChange: handleChange,
            renderValue: selected => (
              <div className='flex flex-wrap gap-1'>
                {(selected as unknown as string[]).map(value => (
                  <Chip key={value} label={value} size='small' />
                ))}
              </div>
            )
          }}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </div>
      <div>
        <CustomTextField
          select
          fullWidth
          label='Placeholder'
          value={personName}
          inputProps={{ 'aria-label': 'Without label' }}
          SelectProps={{ 
            MenuProps,
            multiple: true,
            displayEmpty: true,
            onChange: handleChange,
            renderValue:selected => {
              if ((selected as unknown as string[]).length === 0) {
                return <em>Placeholder</em>
              }
  
              return (selected as unknown as string[]).join(', ')
            }
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
        </CustomTextField>
      </div>
      <div>
        <CustomTextField
          select
          fullWidth
          label='Native'
          value= {personNameNative}
          SelectProps={{ 
            MenuProps,
            native: true,
            multiple: true, // @ts-ignore
            onChange: e =>  handleChangeMultipleNative(e),
            inputProps: { id: 'select-multiple-native' }
          }}
        >
          {names.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </CustomTextField>
      </div>
    </div>
  )
}

export default SelectMultiple
