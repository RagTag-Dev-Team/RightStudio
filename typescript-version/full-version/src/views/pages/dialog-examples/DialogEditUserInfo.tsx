'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Custom Imports
import EditUserInfo from '@components/dialogs/edit-user-info'

const DialogEditUserInfo = () => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <Icon icon='mdi:account-outline' fontSize='2rem' />
          <Typography>Edit User Info</Typography>
          <Typography>Use this modal to modify the existing user&#39;s current information.</Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
      </Card>
      <EditUserInfo open={open} setOpen={setOpen} />
    </>
  )
}

export default DialogEditUserInfo
