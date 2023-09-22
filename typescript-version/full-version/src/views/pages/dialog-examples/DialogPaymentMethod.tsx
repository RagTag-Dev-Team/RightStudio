'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import PaymentMethod from '@components/dialogs/payment-method'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogPaymentMethod = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <Icon icon='mdi:credit-card-outline' fontSize='2rem' />
        <Typography>Add Payment Method</Typography>
        <Typography>Elegant payment methods modal popup example, easy to use in any page.</Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <PaymentMethod open={show} setOpen={setShow} />
    </Card>
  )
}

export default DialogPaymentMethod
