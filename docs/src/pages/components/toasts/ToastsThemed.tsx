// MUI Imports
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsThemed = () => {
  // Hooks
  const theme = useTheme()

  const handleClick = () => {
    return toast.success('Look at me, I have brand styles.', {
      style: {
        padding: '16px',
        color: 'var(--mui-palette-primary-main)',
        border: '1px solid var(--mui-palette-primary-main)',
        backgroundColor: 'var(--mui-palette-background-paper)'
      },
      className: 'custom-toast',
      theme: 'colored',
      closeButton: false,
      progressStyle: {
        backgroundColor: 'var(--mui-palette-primary-main)'
      }
    })
  }

  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='tabler-palette mbe-2 text-[42px]' />
      <Typography className='mbe-4' variant='h5'>Themed</Typography>
      <Typography className='mbe-3'>Customize the default styles the way you want.</Typography>
      <Button variant='contained' onClick={handleClick}>
        Themed
      </Button>
    </div>
  )
}

export default ToastsThemed
