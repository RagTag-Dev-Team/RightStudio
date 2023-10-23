// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsBlank = () => {
  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-checkbox-blank-line mbe-2 text-[32px]' />
      <Typography className='font-medium mbe-4'>Blank</Typography>
      <Typography className='mbe-3'>The most basic variant does not have an icon.</Typography>
      <Button className='mbe-8' variant='contained' onClick={() => toast('Blank Toast')}>
        Blank
      </Button>
    </div>
  )
}

export default ToastsBlank
