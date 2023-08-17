// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

const BadgesBasic = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge badgeContent={4} color='primary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='secondary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='success'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='error'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='warning'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='info'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
    </Box>
  )
}

export default BadgesBasic
