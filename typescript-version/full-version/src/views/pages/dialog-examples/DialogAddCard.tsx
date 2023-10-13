'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import BillingCard from '@components/dialogs/billing-card'

const DialogAddCard = () => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-bank-card-2-line text-[32px]' />
          <Typography>Add New Card</Typography>
          <Typography>
            Quickly collect the credit card details, built in input mask and form validation support.
          </Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
      </Card>
      <BillingCard open={open} setOpen={setOpen} />
    </>
  )
}

export default DialogAddCard
