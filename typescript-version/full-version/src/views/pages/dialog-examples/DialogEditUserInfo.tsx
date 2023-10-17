'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'

const DialogEditUserInfo = () => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-user-3-line text-[32px]' />
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
