// React Imports
import React from 'react'

// MUI Imports
import Button from '@mui/material/Button'

const ButtonsOutlined = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsOutlined
