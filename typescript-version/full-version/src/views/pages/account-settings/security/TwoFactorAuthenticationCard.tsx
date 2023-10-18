'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import TwoFactorAuth from '@components/dialogs/two-factor-auth'

const TwoFactorAuthenticationCard = ({ direction }: { direction: Direction }) => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader title='Two-steps verification' />
        <CardContent className='flex flex-col items-start gap-5'>
          <div className='flex flex-col gap-4'>
            <Typography>Two factor authentication is not enabled yet.</Typography>
            <Typography>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in.
              <Link href='/' onClick={e => e.preventDefault()}>
                Learn more.
              </Link>
            </Typography>
          </div>
          <Button variant='contained' onClick={handleClickOpen}>
            Enable two-factor authentication
          </Button>
          <TwoFactorAuth open={open} setOpen={setOpen} direction={direction} />
        </CardContent>
      </Card>
    </>
  )
}

export default TwoFactorAuthenticationCard
