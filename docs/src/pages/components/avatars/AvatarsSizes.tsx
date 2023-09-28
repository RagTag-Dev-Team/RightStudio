// React Imports
import React from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'

const AvatarsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <Avatar alt='Victor Anderson' className='w-6 h-6' src='/assets/avatars/3.png' />
      <Avatar alt='Victor Anderson' src='/assets/avatars/3.png' />
      <Avatar alt='Victor Anderson' className='w-14 h-14' src='/assets/avatars/3.png' />
    </div>
  )
}

export default AvatarsSizes
