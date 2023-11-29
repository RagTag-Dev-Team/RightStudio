// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Styles Imports
import StyleSheet from './styles.module.css'

const CheckboxLabelPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Checkbox />} className={StyleSheet.checkboxMarginRight}/>
        <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />
      </FormGroup>
      <FormGroup row className='mbs-4'>
        <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' className='mie-4'/>
        <FormControlLabel value='end' control={<Checkbox />} label='End' />
      </FormGroup>
    </div>
  )
}

export default CheckboxLabelPlacement
