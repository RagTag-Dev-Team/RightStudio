// React Imports
import React from 'react'

// MUI Imports
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

const ButtonsFab = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Circular Variant</Typography>
      <div className='flex gap-4 mbe-6'>
        <Fab aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='primary' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='secondary' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='success' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='error' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='warning' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab color='info' aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
        <Fab disabled aria-label='edit'>
          <i className='ri-pencil-line' />
        </Fab>
      </div>
      <Typography className='font-medium'>Extended Variant</Typography>
      <div className='flex gap-4'>
        <Fab variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='primary' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='secondary' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='success' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='error' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='warning' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab color='info' variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
        <Fab disabled variant='extended'>
          <i className='ri-add-line mie-1'/>
          Add
        </Fab>
      </div>
    </div>
  )
}

export default ButtonsFab
