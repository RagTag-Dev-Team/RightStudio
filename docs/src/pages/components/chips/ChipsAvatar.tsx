// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ChipsAvatar = () => {
  return (
    <div className='flex gap-4 flex-wrap'>
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
    </div>
  )
}

export default ChipsAvatar
