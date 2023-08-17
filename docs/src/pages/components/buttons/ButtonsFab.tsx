// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const ButtonsFab = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Typography sx={{ fontWeight: 500 }}>Circular Variant</Typography>
      <Box sx={{ mb: 6, display: 'flex', gap: 4 }}>
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
      </Box>
      <Typography sx={{ fontWeight: 500 }}>Extended Variant</Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Fab variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='primary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='secondary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='success' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='error' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='warning' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab color='info' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
        <Fab disabled variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='mdi:plus' />
          Add
        </Fab>
      </Box>
    </Box>
  )
}

export default ButtonsFab
