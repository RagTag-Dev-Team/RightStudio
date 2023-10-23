// React Imports
import React from 'react'

// MUI Imports
import Fab from '@mui/material/Fab'

const ButtonsFabSizes = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <div className='flex gap-4 items-center'>
        <Fab color='primary' aria-label='add' size='small'>
          <i className='ri-add-line' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <i className='ri-add-line' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <i className='ri-add-line' />
        </Fab>
      </div>
      <div className='flex gap-4 items-center'>
        <Fab variant='extended' size='small'>
          <i className='ri-navigation-line mie-1'/>
          Navigate
        </Fab>
        <Fab variant='extended' size='medium'>
          <i className='ri-navigation-line mie-1' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large'>
          <i className='ri-navigation-line mie-1'/>
          Navigate
        </Fab>
      </div>
    </div>
  )
}

export default ButtonsFabSizes
