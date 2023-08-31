// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastsMultiLine = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:text-box-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Multi Line</Typography>
      <Typography sx={{ mb: 3 }}>The most basic variant with longer texts</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Multi Line
      </Button>
    </Box>
  )
}

export default ToastsMultiLine
