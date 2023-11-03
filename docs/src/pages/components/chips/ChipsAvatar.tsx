// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

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
            <i className='ri-archive-line' />
          </Avatar>
        }
      />
    </div>
  )
}

export default ChipsAvatar
