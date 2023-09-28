// React Imports
import React from 'react'

// MUI Imports
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
    <div
     className='flex text-center flex-col items-center'
    >
      <Icon icon='mdi:palette-outline' fontSize='2rem' className='mbe-2'/>
      <Typography className='mbe-4 font-medium'>Themed</Typography>
      <Typography className='mbe-3'>Customize the default styles the way you want.</Typography>
      <Button className='mbe-8'variant='contained' onClick={handleClick}>
        Themed
      </Button>
    </div>
  )
}

export default ToastsThemed
