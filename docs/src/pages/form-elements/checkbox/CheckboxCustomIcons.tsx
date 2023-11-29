// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxCustomIcons = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Heart'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<i className='ri-heart-fill' />}
            icon={<i className='ri-heart-line' />}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<i className='ri-star-fill' />}
            icon={<i className='ri-star-line' />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxCustomIcons
