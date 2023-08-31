// React Imports
import React from 'react'

// MUI Imports
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const OutsideAppBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' sx={{ mr: 2.5 }} color='inherit' aria-label='menu'>
          <Icon icon='mdi:menu' />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1, color: 'common.white' }}>
          News
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default OutsideAppBar
