// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Checked' control={<Checkbox defaultChecked name='basic-checked' />} />
      <FormControlLabel label='Unchecked' control={<Checkbox name='basic-unchecked' />} />
      <FormControlLabel
        disabled
        label='Disabled Checked'
        control={<Checkbox defaultChecked name='basic-disabled-checked' />}
      />
      <FormControlLabel disabled label='Disabled Unchecked' control={<Checkbox name='basic-disabled-unchecked' />} />
      <FormControlLabel label='Indeterminate' control={<Checkbox indeterminate name='basic-indeterminate' />} />
    </FormGroup>
  )
}

export default CheckboxBasic
