// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastError = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-close-line mbe-2 text-[28px]' />
      <Typography className='mbe-4' variant='h5'>Error</Typography>
      <Typography className='mbe-3'>Indicate that an error occurred.</Typography>
      <Button className='mbe-8'color='error' variant='contained' onClick={() => toast.error("This didn't work.")}>
        Error
      </Button>
    </div>
  )
}

export default ToastError
