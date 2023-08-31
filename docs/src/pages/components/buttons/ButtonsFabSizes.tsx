// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsFabSizes = () => {
  return (
    <Box sx={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Fab color='primary' aria-label='add' size='small'>
          <Icon icon='mdi:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <Icon icon='mdi:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <Icon icon='mdi:plus' />
        </Fab>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <Fab variant='extended' size='small' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:navigation-outline' />
          Navigate
        </Fab>
        <Fab variant='extended' size='medium' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:navigation-outline' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:navigation-outline' />
          Navigate
        </Fab>
      </Box>
    </Box>
  )
}

export default ButtonsFabSizes
