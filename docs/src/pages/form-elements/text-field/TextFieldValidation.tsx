// MUI Imports
import Box from '@mui/material/Box'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextFieldValidation = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-6'>
      <CustomTextField error id='validation-error' label='Error' defaultValue='Hello World' />
      <CustomTextField
        error
        label='Error'
        defaultValue='Hello World'
        helperText='Incorrect entry.'
        id='validation-error-helper-text'
      />
    </Box>
  )
}

export default TextFieldValidation
