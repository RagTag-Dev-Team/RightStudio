// MUI Imports
import Button from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import type { ButtonProps } from '@mui/material/Button'

// Styled component for a custom button
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover, &:active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
    backgroundColor: `${purple[700]} !important`
  }
}))

// Styled component for a Bootstrap button
const BootstrapButton = styled(Button)<ButtonProps>({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0D6EFD !important',
  borderColor: '#0D6EFD !important',
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
  '&:hover': {
    backgroundColor: '#0B5ED7 !important',
    borderColor: '#0A58CA !important',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0A58CA !important',
    borderColor: '#0A53BE !important'
  },
  '&:focus, &.Mui-focusVisible': {
    backgroundColor: '#0B5ED7 !important',
    borderColor: '#0A58CA !important',
    boxShadow: '0 0 0 0.25rem rgba(49,132,253,0.5) !important'
  }
})

const ButtonsCustomized = () => {
  return (
    <div className='flex gap-4'>
      <CustomButton variant='contained'>Custom Color</CustomButton>
      <BootstrapButton variant='contained' disableRipple>
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export default ButtonsCustomized
