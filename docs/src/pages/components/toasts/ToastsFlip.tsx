// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast, Flip } from 'react-toastify'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const ToastsFlip = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:horizontal-rotate-counterclockwise' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Flip</Typography>
      <Typography sx={{ mb: 3 }}>Change the default transition as per your needs</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={() => toast('Blank Toast', {
        transition: Flip
      })}>
        Blank
      </Button>
    </Box>
  )
}

export default ToastsFlip
