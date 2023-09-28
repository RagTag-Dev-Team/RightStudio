// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastError = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <Icon icon='mdi:close' fontSize='2rem' className='mbe-2'/>
      <Typography className='mbe-4 font-medium'>Error</Typography>
      <Typography className='mbe-3'>Indicate that an error occurred.</Typography>
      <Button className='mbe-8'color='error' variant='contained' onClick={() => toast.error("This didn't work.")}>
        Error
      </Button>
    </div>
  )
}

export default ToastError
