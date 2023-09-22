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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogPaymentProviders = () => {
  // States
  const [show, setShow] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <Icon icon='mdi:credit-card-multiple-outline' fontSize='2rem' />
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
