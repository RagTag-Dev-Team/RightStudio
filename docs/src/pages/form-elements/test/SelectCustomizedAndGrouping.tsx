// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import ListSubheader from '@mui/material/ListSubheader'
import type { SelectChangeEvent } from '@mui/material/Select'
import type { FormControlProps } from '@mui/material/FormControl'

// Styled FormControl component
const CustomFormControl = styled(FormControl)<FormControlProps>(({ theme }) => ({
  '& .MuiFormLabel-root.Mui-focused': {
    color: theme.palette.info.main
  },
  '& .MuiInputLabel-root': {
    left: -14,
    zIndex: 0
  },
  '& > .MuiInputBase-root': {
    marginTop: theme.spacing(4),
    '&.MuiInput-root:before, &.MuiInput-root:after': {
      border: 0
    }
  },
  '& .MuiInputBase-input': {
    fontSize: 16,
    borderRadius: 4,
    position: 'relative',
    padding: '10px 26px 10px 12px',
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: theme.palette.mode === 'light' ? '1px solid #ced4da' : `1px solid ${theme.palette.divider}`,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,0.25)'
    }
  }
}))

const SelectCustomizedAndGrouping = () => {
  // States
  const [value, setValue] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Card>
      <CardHeader title='Customized' />
      <CardContent>
        <CustomFormControl className='mie-4 mbe-4' fullWidth>
          <InputLabel id='demo-customized-select-label'>Age</InputLabel>
          <Select
            value={value}
            input={<InputBase />}
            onChange={handleChange}
            id='demo-customized-select'
            labelId='demo-customized-select-label'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </CustomFormControl>
        <CustomFormControl fullWidth>
          <InputLabel htmlFor='demo-customized-select-native'>Age</InputLabel>
          <Select native input={<InputBase />} id='demo-customized-select-native' value={value} onChange={handleChange}>
            <option aria-label='None' value='' />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </CustomFormControl>
      </CardContent>

      <CardContent>
        <Typography variant='h6' className='mbe-4'>Grouping</Typography>
        <div className='flex gap-4 flex-col'>
          <FormControl fullWidth>
            <InputLabel htmlFor='grouped-select'>Grouping</InputLabel>
            <Select label='Grouping' defaultValue='' id='grouped-select'>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor='grouped-native-select'>Grouping</InputLabel>
            <Select native label='Grouping' defaultValue='' id='grouped-native-select'>
              <option aria-label='None' value='' />
              <optgroup label='Category 1'>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
              </optgroup>
              <optgroup label='Category 2'>
                <option value={3}>Option 3</option>
                <option value={4}>Option 4</option>
              </optgroup>
            </Select>
          </FormControl>
        </div>
      </CardContent>
    </Card>
  )
}

export default SelectCustomizedAndGrouping
