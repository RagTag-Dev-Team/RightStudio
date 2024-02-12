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
            checkedIcon={<i className='tabler-heart-filled' />}
            icon={<i className='tabler-heart' />}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<i className='tabler-star-filled' />}
            icon={<i className='tabler-star' />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxCustomIcons
