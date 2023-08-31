// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ChipsAvatar = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      <Chip label='Default' avatar={<Avatar />} />
      <Chip label='Howard Paul' avatar={<Avatar src='/assets/avatars/7.png' alt='User Avatar' />} />
      <Chip label='Maurice Bell' avatar={<Avatar>M</Avatar>} />
      <Chip
        label='Archived'
        avatar={
          <Avatar>
            <Icon icon='mdi:archive-outline' fontSize='1.25rem' />
          </Avatar>
        }
      />
    </Box>
  )
}

export default ChipsAvatar
