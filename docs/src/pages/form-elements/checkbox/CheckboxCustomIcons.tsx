// React Imports
import React from 'react'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const CheckboxCustomIcons = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Heart'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<Icon icon='mdi:heart' />}
            icon={<Icon icon='mdi:heart-outline' />}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            checkedIcon={<Icon icon='mdi:star' />}
            icon={<Icon icon='mdi:star-outline' />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxCustomIcons
