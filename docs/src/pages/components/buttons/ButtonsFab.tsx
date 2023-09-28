// React Imports
import React from 'react'

// MUI Imports
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsFab = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Circular Variant</Typography>
      <div className='flex gap-4 mbe-6'>
        <Fab aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='primary' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='secondary' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='success' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='error' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='warning' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab color='info' aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
        <Fab disabled aria-label='edit'>
          <Icon icon='mdi:pencil' />
        </Fab>
      </div>
      <Typography className='font-medium'>Extended Variant</Typography>
      <div className='flex gap-4'>
        <Fab variant='extended'>
          <Icon icon='mdi:plus'  className='mie-1'/>
          Add
        </Fab>
        <Fab color='primary' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab color='secondary' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab color='success' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab color='error' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab color='warning' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab color='info' variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
        <Fab disabled variant='extended'>
          <Icon icon='mdi:plus' className='mie-1'/>
          Add
        </Fab>
      </div>
    </div>
  )
}

export default ButtonsFab
