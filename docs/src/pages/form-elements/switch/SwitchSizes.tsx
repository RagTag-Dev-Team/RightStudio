// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch size='small' />} label='Small' />
      <FormControlLabel control={<Switch />} label='Medium' />
    </FormGroup>
  )
}

export default SwitchSizes
