// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const AvatarsIcon = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Avatar>
        <Icon icon='mdi:folder-outline' />
      </Avatar>
    </Box>
  )
}

export default AvatarsIcon
