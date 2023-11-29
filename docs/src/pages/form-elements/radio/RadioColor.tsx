// MUI Imports
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioColor = () => {
  return (
    <>
      <FormControlLabel value='primary' control={<Radio defaultChecked />} label='Primary' />
      <FormControlLabel value='secondary' control={<Radio defaultChecked color='secondary' />} label='Secondary' />
      <FormControlLabel value='success' label='Success' control={<Radio defaultChecked color='success' />} />
      <FormControlLabel value='error' label='Error' control={<Radio defaultChecked color='error' />} />
      <FormControlLabel value='warning' label='Warning' control={<Radio defaultChecked color='warning' />} />
      <FormControlLabel value='info' label='Info' control={<Radio defaultChecked color='info' />} />
    </>
  )
}

export default RadioColor
