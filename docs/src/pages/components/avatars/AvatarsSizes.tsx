// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

const AvatarsSizes = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Avatar alt='Victor Anderson' sx={{ width: 25, height: 25 }} src='/assets/avatars/3.png' />
      <Avatar alt='Victor Anderson' src='/assets/avatars/3.png' />
      <Avatar alt='Victor Anderson' sx={{ width: 56, height: 56 }} src='/assets/avatars/3.png' />
    </Box>
  )
}

export default AvatarsSizes
