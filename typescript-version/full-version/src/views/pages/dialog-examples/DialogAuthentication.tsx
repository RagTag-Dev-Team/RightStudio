'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import TwoFactorAuth from '@components/dialogs/two-factor-auth'

const DialogAuthentication = ({ direction }: { direction: Direction }) => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-lock-line text-[32px]' />
        <Typography>Two Factor Authentication</Typography>
        <Typography>Enhance your application security by enabling two factor authentication.</Typography>
        <Button variant='contained' onClick={() => setOpen(true)}>
          Show
        </Button>
        <TwoFactorAuth open={open} setOpen={setOpen} direction={direction} />
      </CardContent>
    </Card>
  )
}

export default DialogAuthentication
