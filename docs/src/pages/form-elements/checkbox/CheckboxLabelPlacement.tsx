// React Imports
import React from 'react'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxLabelPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Checkbox />} sx={{ mr: 9.2 }} />
        <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />
      </FormGroup>
      <FormGroup row sx={{ mt: 4 }}>
        <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' sx={{ mr: 4 }} />
        <FormControlLabel value='end' control={<Checkbox />} label='End' />
      </FormGroup>
    </div>
  )
}

export default CheckboxLabelPlacement
