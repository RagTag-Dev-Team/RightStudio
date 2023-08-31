// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
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
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Typography sx={{ fontWeight: 500 }}>Default</Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />
        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </Box>
      <Typography sx={{ fontWeight: 500 }}>Custom</Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip
          label='Secondary'
          color='secondary'
          onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-outline' />}
        />
      </Box>
    </Box>
  )
}

export default ChipsOnDelete
