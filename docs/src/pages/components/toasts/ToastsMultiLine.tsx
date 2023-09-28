// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastsMultiLine = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }

  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <Icon icon='mdi:text-div-outline' fontSize='2rem' className='mbe-2'/>
      <Typography className='mbe-4 font-medium'>Multi Line</Typography>
      <Typography className='mbe-3'>The most basic variant with longer texts</Typography>
      <Button className='mbe-8'variant='contained' onClick={handleClick}>
        Multi Line
      </Button>
    </div>
  )
}

export default ToastsMultiLine
