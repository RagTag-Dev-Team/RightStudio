// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextFieldControlledUncontrolled = () => {
  // States
  const [name, setName] = useState<string>('Cat in the Hat')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-6 flex-wrap'>
      <CustomTextField value={name} label='Controlled' onChange={handleChange} id='controlled-text-field' />
      <CustomTextField id='uncontrolled-text-field' label='Uncontrolled' defaultValue='foo' />
    </Box>
  )
}

export default TextFieldControlledUncontrolled
