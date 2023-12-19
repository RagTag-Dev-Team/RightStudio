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

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type PricingProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data: PricingPlanType[]
  direction: Direction
}

const PricingDialog = ({ open, setOpen, data, direction }: PricingProps) => {
  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={() => setOpen(false)}>
      <DialogContent className='p-10 sm:p-16'>
        <IconButton className={styles.closeIcon} onClick={() => setOpen(false)}>
          <i className='ri-close-line' />
        </IconButton>
        <Pricing data={data} direction={direction} />
      </DialogContent>
    </Dialog>
  )
}

export default PricingDialog
