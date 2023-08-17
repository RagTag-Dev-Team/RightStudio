// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const BadgesDot = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge variant='dot' color='primary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='secondary'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='error'>
        <Typography>Typography</Typography>
      </Badge>
    </Box>
  )
}

export default BadgesDot
