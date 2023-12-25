// MUI Imports
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MuiInputBase from '@mui/material/InputBase'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import type { InputBaseProps } from '@mui/material/InputBase'

// Styled InputBase component
const InputBase = styled(MuiInputBase)<InputBaseProps>(({ theme }) => ({
  marginTop: theme.spacing(4),
  '& .MuiInputBase-input': {
    fontSize: 16,
    borderRadius: 4,
    padding: '10px 12px',
    position: 'relative',
    backgroundColor: 'var(--mui-palette-background-paper)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: theme.palette.mode === 'light' ? '1px solid #ced4da' : '1px solid var(--mui-palette-divider)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: 'var(--mui-palette-primary-main)',
      boxShadow: '0 0 0 0.2rem rgb(var(--mui-palette-primary-mainChannel) / 0.25)'
    }
  }
}))

const TextFieldCustomized = () => {
  return (
    <Box component='form' noValidate autoComplete='off' className='flex gap-4'>
      <FormControl fullWidth variant='standard'>
        <InputLabel shrink htmlFor='bootstrap-input' className='-translate-y-[0.25rem] scale-[0.75]'>
          Bootstrap
        </InputLabel>
        <InputBase defaultValue='react-bootstrap' id='bootstrap-input' />
      </FormControl>
    </Box>
  )
}

export default TextFieldCustomized
