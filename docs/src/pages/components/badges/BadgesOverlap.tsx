// React Imports
import React from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

const BadgesOverlap = () => {
  return (
    <div className='flex gap-6'>
      <Badge color='primary' badgeContent=' '>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' variant='dot'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' overlap='circular' badgeContent=' '>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge color='primary' overlap='circular' variant='dot'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesOverlap
