'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import AddNewAddress from '@components/dialogs/add-edit-address'

const DialogAddNewAddress = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-home-4-line text-[32px]' />
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
