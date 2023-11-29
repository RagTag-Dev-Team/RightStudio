// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldControlledUncontrolled = () => {
  // States
  const [name, setName] = useState<string>('Cat in the Hat')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-4 flex-wrap flex-col'>
      <TextField value={name} label='Controlled' onChange={handleChange} id='controlled-text-field' />
      <TextField id='uncontrolled-text-field' label='Uncontrolled' defaultValue='foo' />
    </Box>
  )
}

export default TextFieldControlledUncontrolled
