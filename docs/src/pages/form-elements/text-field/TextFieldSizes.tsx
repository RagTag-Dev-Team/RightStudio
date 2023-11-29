// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TextFieldSizes = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-4 flex-wrap flex-col'>
      <TextField label='Size' id='size-small' defaultValue='Small' size='small' />
      <TextField label='Size' id='size-normal' defaultValue='Normal' />
    </Box>
  )
}

export default TextFieldSizes
