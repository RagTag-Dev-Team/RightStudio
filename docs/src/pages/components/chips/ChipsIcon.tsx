// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsIcon = () => {
  return (
    <div className='flex gap-4'>
      <Chip label='Previous' icon={<i className='ri-arrow-left-circle-line text-xl' />} />
      <Chip
        label='Next'
        color='primary'
        variant='outlined'
        icon={<i className='ri-arrow-right-circle-line text-xl' />}
      />
    </div>
  )
}

export default ChipsIcon
