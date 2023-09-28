// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ChipsOnDelete = () => {
  const handleDelete = () => {
    // eslint-disable-next-line no-console
    console.info('You clicked the delete icon.')
  }

  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Default</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />
        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </div>
      <Typography className='font-medium'>Custom</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip
          label='Secondary'
          color='secondary'
          onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-outline' />}
        />
      </div>
    </div>
  )
}

export default ChipsOnDelete
