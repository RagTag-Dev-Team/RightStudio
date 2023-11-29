// MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

const SelectProps = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <FormControl fullWidth>
        <InputLabel id='demo-basic-select-helper-label'>Age</InputLabel>
        <Select label='Age' defaultValue='' id='demo-basic-select-helper' labelId='demo-basic-select-helper-label'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <Select defaultValue='' displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id='demo-basic-select-autoWidth-label'>Age</InputLabel>
        <Select
          autoWidth
          label='Age'
          defaultValue=''
          id='demo-basic-select-autoWidth'
          labelId='demo-basic-select-autoWidth-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl disabled fullWidth>
        <InputLabel id='demo-basic-select-disabled-label'>Age</InputLabel>
        <Select
          label='Age'
          defaultValue=''
          id='demo-basic-select-disabled'
          labelId='demo-basic-select-disabled-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error fullWidth>
        <InputLabel id='demo-basic-select-error-label'>Age</InputLabel>
        <Select
          label='Age'
          defaultValue=''
          id='demo-basic-select-error'
          renderValue={value => `⚠️  - ${value}`}
          labelId='demo-basic-select-error-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id='demo-basic-select-readonly-label'>Age</InputLabel>
        <Select
          label='Age'
          defaultValue=''
          inputProps={{ readOnly: true }}
          id='demo-basic-select-readonly'
          labelId='demo-basic-select-readonly-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required fullWidth>
        <InputLabel id='demo-basic-select-required-label'>Age</InputLabel>
        <Select
          label='Age *'
          defaultValue=''
          id='demo-basic-select-required'
          labelId='demo-basic-select-required-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  )
}

export default SelectProps
