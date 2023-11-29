// React Imports
import { forwardRef } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'

type PickerProps = {
  label?: string
  readOnly?: boolean
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // Props
  const { label, readOnly } = props

  return (
    <TextField fullWidth inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  )
})

export default PickersComponent
