// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioSizes = () => {
  return (
    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>
      <FormControlLabel value='small' control={<Radio size='small' />} label='Small' />
      <FormControlLabel value='medium' control={<Radio />} label='Medium' />
    </RadioGroup>
  )
}

export default RadioSizes
