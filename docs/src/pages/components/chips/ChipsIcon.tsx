// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const ChipsIcon = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Chip label='Previous' icon={<Icon icon='mdi:arrow-left-thin-circle-outline' fontSize='1.25rem' />} />
      <Chip
        label='Next'
        color='primary'
        variant='outlined'
        icon={<Icon icon='mdi:arrow-right-thin-circle-outline' fontSize='1.25rem' />}
      />
    </Box>
  )
}

export default ChipsIcon
