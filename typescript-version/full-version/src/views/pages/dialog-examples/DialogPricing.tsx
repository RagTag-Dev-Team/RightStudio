'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import PricingDialog from '@components/dialogs/pricing'

const DialogPricing = ({ data }: { data: PricingPlanType[] }) => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='ri-money-dollar-circle-line text-[32px]' />
          <Typography>Pricing</Typography>
          <Typography>Elegant pricing options dialog popup example, easy to use in any page.</Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
        <PricingDialog open={open} setOpen={setOpen} data={data} />
      </Card>
    </>
  )
}

export default DialogPricing
