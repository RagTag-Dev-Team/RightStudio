'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'
import ConfirmationDialog from '../confirmation-dialog'

type UpgradePlanProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const UpgradePlan = ({ open, setOpen }: UpgradePlanProps) => {
  // States
  const [openConfirmation, setOpenConfirmation] = useState(false)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle
          variant='h5'
          className={classnames('flex flex-col gap-2 text-center', styles.dialogTitle, {
            [styles.smDialogTitle]: isBelowSmScreen
          })}
        >
          Upgrade Plan
          <Typography component='span' variant='body2' className='flex flex-col text-center'>
            Choose the best plan for user
          </Typography>
        </DialogTitle>
        <DialogContent
          className={classnames('overflow-visible', styles.dialogContentAlone, {
            [styles.smDialogContentAlone]: isBelowSmScreen
          })}
        >
          <div className='flex items-center gap-4'>
            <FormControl fullWidth size='small'>
              <InputLabel id='user-view-plans-select-label'>Choose Plan</InputLabel>
              <Select
                label='Choose Plan'
                defaultValue='Standard'
                id='user-view-plans-select'
                labelId='user-view-plans-select-label'
              >
                <MenuItem value='Basic'>Basic - $0/month</MenuItem>
                <MenuItem value='Standard'>Standard - $99/month</MenuItem>
                <MenuItem value='Enterprise'>Enterprise - $499/month</MenuItem>
                <MenuItem value='Company'>Company - $999/month</MenuItem>
              </Select>
            </FormControl>
            <Button variant='contained' className='capitalize'>
              Upgrade
            </Button>
          </div>
          <Divider className='mlb-6' />
          <div className='flex flex-col gap-1'>
            <Typography variant='body2'>User current plan is standard plan</Typography>
            <div className='flex items-center justify-between'>
              <div className='flex justify-center gap-1'>
                <Typography component='sup' className='self-start' color='primary'>
                  $
                </Typography>
                <Typography component='span' color='primary'>
                  99
                </Typography>
                <Typography component='sub' className='self-end'>
                  /month
                </Typography>
              </div>
              <Button variant='outlined' className='capitalize' color='error' onClick={() => setOpenConfirmation(true)}>
                Cancel Subscription
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <ConfirmationDialog open={openConfirmation} setOpen={setOpenConfirmation} type='unsubscribe' />
    </>
  )
}

export default UpgradePlan
