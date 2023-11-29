// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioGroupComponent = () => {

  return (
    <FormControl className='flex-wrap flex-row'>
      <RadioGroup row defaultValue='checked' name='basic-radio' aria-label='basic-radio'>
        <FormControlLabel value='checked' control={<Radio />} label='Checked' />
        <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />
      </RadioGroup>

      <RadioGroup row value='disabled-checked' name='basic-disabled-radio' aria-label='basic-disabled-radio'>
        <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<Radio />} />
        <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<Radio />} />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupComponent
