// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'

// Type Imports
import type { PricingPlanType } from '@/app/api/pages/pricing/route'

// Component Imports
import Pricing from '@components/pricing'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  data: PricingPlanType[]
}

const PricingDialog = ({ open, setOpen, data }: Props) => {
  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <IconButton className={styles.closeIcon} onClick={() => setOpen(false)}>
          <Icon icon='mdi:close' />
        </IconButton>
        <Pricing data={data} />
      </DialogContent>
    </Dialog>
  )
}

export default PricingDialog
