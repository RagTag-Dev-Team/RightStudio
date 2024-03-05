// MUI Imports
import Box from '@mui/material/Box'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextFieldColor = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-6 flex-wrap'>
      <CustomTextField label='Secondary' color='secondary' helperText='helper text' />
      <CustomTextField label='Success' color='success' helperText='helper text' />
      <CustomTextField label='Error' color='error' helperText='helper text' />
      <CustomTextField label='Warning' color='warning' helperText='helper text' />
      <CustomTextField label='Info' color='info' helperText='helper text' />
    </Box>
  )
}

export default TextFieldColor
