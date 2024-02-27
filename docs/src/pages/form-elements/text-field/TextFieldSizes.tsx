// MUI Imports
import Box from '@mui/material/Box'

// Component Imports
import CustomTextField from '@core/components/mui/text-field'

const TextFieldSizes = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-6 flex-wrap'>
      <CustomTextField label='Size' id='size-small' defaultValue='Small' />
      <CustomTextField label='Size' id='size-medium' defaultValue='Medium' size='medium' />
    </Box>
  )
}

export default TextFieldSizes
