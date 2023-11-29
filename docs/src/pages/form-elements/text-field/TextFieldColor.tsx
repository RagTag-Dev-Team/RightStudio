// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldColor = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-4 flex-wrap flex-col'>
      <TextField id='color-outlined' label='Outlined success' color='success' />
      <TextField id='color-filled' label='Filled success' variant='filled' color='success' />
      <TextField id='color-standard' label='Standard success' color='success' variant='standard' />
    </Box>
  )
}

export default TextFieldColor
