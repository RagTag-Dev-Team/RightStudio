// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsDisabled = () => {
  return (
    <div className='flex gap-4'>
      <Chip label='Basic' disabled />
      <Chip label='Outlined' variant='outlined' disabled />
    </div>
  )
}

export default ChipsDisabled
