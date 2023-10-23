// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsCustomPosition = () => {
  const handleClick = () => {
    return toast.success('Always at the bottom.', {
      position: 'bottom-right'
    })
  }

  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-layout-grid-line mbe-2 text-[32px]'/>
      <Typography className='mbe-4 font-medium'>Custom Position</Typography>
      <Typography className='mbe-3'>You can change the toast's position as you like.</Typography>
      <Button className='mbe-8' variant='contained' onClick={handleClick}>
        Position
      </Button>
    </div>
  )
}

export default ToastsCustomPosition
