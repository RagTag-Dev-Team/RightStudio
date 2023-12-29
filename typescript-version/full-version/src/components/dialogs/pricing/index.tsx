'use client'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'

// Type Imports
import type { Direction } from '@core/types'
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import Pricing from '@components/pricing'

type PricingProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data: PricingPlanType[]
  direction: Direction
}

const PricingDialog = ({ open, setOpen, data, direction }: PricingProps) => {
  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={() => setOpen(false)} scroll='body'>
      <DialogContent className='p-10 sm:p-16'>
        <IconButton className='absolute block-start-4 inline-end-4' onClick={() => setOpen(false)}>
          <i className='ri-close-line' />
        </IconButton>
        <Pricing data={data} direction={direction} />
      </DialogContent>
    </Dialog>
  )
}

export default PricingDialog
