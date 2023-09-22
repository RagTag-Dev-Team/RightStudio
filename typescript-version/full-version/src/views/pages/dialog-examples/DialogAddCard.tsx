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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogAddCard = () => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <Icon icon='mdi:credit-card-outline' fontSize='2rem' />
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
