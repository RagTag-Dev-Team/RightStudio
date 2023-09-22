'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Custom Imports
import AddNewAddress from '@components/dialogs/add-new-address'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogAddNewAddress = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <Icon icon='mdi:home-outline' fontSize='2rem' />
        <Typography>Add New Address</Typography>
        <Typography>
          Ready to use form to collect user address data with validation and custom input support.
        </Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <AddNewAddress open={show} setOpen={setShow} />
    </Card>
  )
}

export default DialogAddNewAddress
