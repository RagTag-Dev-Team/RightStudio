// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

const BadgesMaxValue = () => {
  return (
    <Box sx={{ display: 'flex', gap: '1.5rem' }}>
      <Badge badgeContent={99} color='primary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={100} color='primary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={1000} max={999} color='primary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
    </Box>
  )
}

export default BadgesMaxValue
