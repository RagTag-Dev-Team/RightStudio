// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, Flip } from 'react-toastify'

const ToastsFlip = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='restart-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Flip</Typography>
      <Typography className='mbe-3'>Change the default transition as per your needs</Typography>
      <Button className='mbe-8'variant='contained' onClick={() => toast('Blank Toast', {
        transition: Flip
      })}>
        Blank
      </Button>
    </div>
  )
}

export default ToastsFlip
