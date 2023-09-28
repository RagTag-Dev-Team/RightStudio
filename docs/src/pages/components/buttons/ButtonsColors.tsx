// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'

const ButtonsColors = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex gap-4'>
        <Button color='success'>Success</Button>
        <Button color='error'>Error</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
      </div>
      <div className='flex gap-4'>
        <Button variant='outlined' color='success'>
          Success
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
      </div>
      <div className='flex gap-4'>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
      </div>
    </div>
  )
}

export default ButtonsColors
