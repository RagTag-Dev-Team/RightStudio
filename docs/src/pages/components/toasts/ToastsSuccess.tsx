// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsSuccess = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-checkbox-circle-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Success</Typography>
      <Typography className='mbe-3'>Indicate that an action was completed successfully.</Typography>
      <Button className='mbe-8'color='success' variant='contained' onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
    </div>
  )
}

export default ToastsSuccess
