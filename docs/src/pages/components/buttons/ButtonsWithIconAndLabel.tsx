// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'

const ButtonsWithIconAndLabel = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' endIcon={<i className='ri-send-plane-2-line' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<i className='ri-delete-bin-7-line' />}>
        Delete
      </Button>
    </div>
  )
}

export default ButtonsWithIconAndLabel
