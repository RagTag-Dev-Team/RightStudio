// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

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
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={() => setOpen(false)}>
      <DialogContent
        className={classnames(styles.dialogContentAlone, {
          [styles.smDialogContentAlone]: isBelowSmScreen
        })}
      >
        <IconButton className={styles.closeIcon} onClick={() => setOpen(false)}>
          <Icon icon='mdi:close' />
        </IconButton>
        <Pricing data={data} />
      </DialogContent>
    </Dialog>
  )
}

export default PricingDialog
