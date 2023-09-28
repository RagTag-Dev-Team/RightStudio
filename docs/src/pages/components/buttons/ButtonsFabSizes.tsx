// React Imports
import React from 'react'

// MUI Imports
import Fab from '@mui/material/Fab'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsFabSizes = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <div className='flex gap-4 items-center'>
        <Fab color='primary' aria-label='add' size='small'>
          <Icon icon='mdi:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <Icon icon='mdi:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <Icon icon='mdi:plus' />
        </Fab>
      </div>
      <div className='flex gap-4 items-center'>
        <Fab variant='extended' size='small'>
          <Icon icon='mdi:navigation-outline' className="mie-1"/>
          Navigate
        </Fab>
        <Fab variant='extended' size='medium'>
          <Icon icon='mdi:navigation-outline' className='mie-1' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large'>
          <Icon icon='mdi:navigation-outline' className='mie-1'/>
          Navigate
        </Fab>
      </div>
    </div>
  )
}

export default ButtonsFabSizes
