'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import PaymentProviders from '@components/dialogs/payment-providers'

const DialogPaymentProviders = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-secure-payment-line text-[32px]' />
        <Typography>Payment providers</Typography>
        <Typography>Elegant payment options modal popup example, easy to use in any page.</Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <PaymentProviders open={show} setOpen={setShow} />
    </Card>
  )
}

export default DialogPaymentProviders
