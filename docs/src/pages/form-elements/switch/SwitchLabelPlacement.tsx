// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchLabelPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' className='mie-8' control={<Switch />} />
        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />
      </FormGroup>
      <FormGroup row className='mbs-4'>
        <FormControlLabel value='start' label='Start' labelPlacement='start' className='mie-4' control={<Switch />} />
        <FormControlLabel value='end' control={<Switch />} label='End' />
      </FormGroup>
    </div>
  )
}

export default SwitchLabelPlacement
