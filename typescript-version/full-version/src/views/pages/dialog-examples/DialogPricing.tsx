'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'

// Type Imports
import type { PricingPlanType } from '@/app/api/pages/pricing/route'

// Component Imports
import Pricing from '@components/pricing'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const DialogPricing = ({ data }: { data: PricingPlanType[] }) => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <Icon icon='mdi:currency-usd' fontSize='2rem' />
          <Typography>Pricing</Typography>
          <Typography>Elegant pricing options dialog popup example, easy to use in any page.</Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
        <Dialog fullWidth maxWidth='lg' open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <IconButton className='!absolute top-4 right-4' onClick={() => setOpen(false)}>
              <Icon icon='mdi:close' />
            </IconButton>
            <Pricing data={data} />
          </DialogContent>
        </Dialog>
      </Card>
    </>
  )
}

export default DialogPricing
