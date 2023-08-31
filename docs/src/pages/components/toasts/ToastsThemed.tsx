// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ToastsThemed = () => {
  // Hooks
  const theme = useTheme()

  const handleClick = () => {
    return toast.success('Look at me, I have brand styles.', {
      style: {
        padding: '16px',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.contrastText
      },
      theme: 'colored',
      closeButton: false,
      progressStyle: {
        backgroundColor: theme.palette.primary.main
      }
    })
  }

  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:palette-outline' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Themed</Typography>
      <Typography sx={{ mb: 3 }}>Customize the default styles the way you want.</Typography>
      <Button sx={{ mb: 8 }} variant='contained' onClick={handleClick}>
        Themed
      </Button>
    </Box>
  )
}

export default ToastsThemed
