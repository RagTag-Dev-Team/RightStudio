// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchControlledUncontrolled = () => {
  // States
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel label='Controlled' control={<Switch checked={checked} onChange={handleChange} />} />
      <FormControlLabel control={<Switch />} label='Uncontrolled' />
    </FormGroup>
  )
}

export default SwitchControlledUncontrolled
