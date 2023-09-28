// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastsSuccess = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <Icon icon='mdi:check-circle-outline' fontSize='2rem' className='mbe-2'/>
      <Typography className='mbe-4 font-medium'>Success</Typography>
      <Typography className='mbe-3'>Indicate that an action was completed successfully.</Typography>
      <Button className='mbe-8'color='success' variant='contained' onClick={() => toast.success('Successfully toasted!')}>
        Success
      </Button>
    </div>
  )
}

export default ToastsSuccess
