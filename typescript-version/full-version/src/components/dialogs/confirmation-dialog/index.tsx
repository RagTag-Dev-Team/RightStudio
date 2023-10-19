'use client'

// React Imports
import { Fragment, useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type ConfirmationType = 'delete-account' | 'unsubscribe' | 'suspend-account'

type ConfirmationDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
  type: ConfirmationType
}

const ConfirmationDialog = ({ open, setOpen, type }: ConfirmationDialogProps) => {
  // States
  const [secondDialog, setSecondDialog] = useState(false)
  const [userInput, setUserInput] = useState(false)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleSecondDialogClose = () => {
    setSecondDialog(false)
    setOpen(false)
  }

  const handleConfirmation = (value: boolean) => {
    setUserInput(value)
    setSecondDialog(true)
    setOpen(false)
  }

  const Wrapper = type === 'suspend-account' ? 'div' : Fragment

  return (
    <>
      <Dialog fullWidth maxWidth='xs' open={open} onClose={() => setOpen(false)}>
        <DialogContent
          className={classnames('flex items-center flex-col text-center', styles.dialogTitle, {
            [styles.smDialogTitle]: isBelowSmScreen
          })}
        >
          <i className='ri-error-warning-line text-[88px]' />
          <Wrapper
            {...(type === 'suspend-account' && {
              className: 'flex flex-col items-center gap-5'
            })}
          >
            <Typography>
              {type === 'delete-account' && 'Are you sure you want to deactivate your account?'}
              {type === 'unsubscribe' && 'Are you sure to cancel your subscription?'}
              {type === 'suspend-account' && 'Are you sure?'}
            </Typography>
            {type === 'suspend-account' && <Typography>You won&#39;t be able to revert user!</Typography>}
          </Wrapper>
        </DialogContent>
        <DialogActions
          className={classnames('gap-2 justify-center', styles.dialogActions, {
            [styles.smDialogActions]: isBelowSmScreen
          })}
        >
          <Button variant='contained' onClick={() => handleConfirmation(true)}>
            {type === 'suspend-account' ? 'Yes, Suspend User!' : 'Yes'}
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              handleConfirmation(false)
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={secondDialog} onClose={handleSecondDialogClose}>
        <DialogContent
          className={classnames('flex items-center flex-col text-center', styles.dialogTitle, {
            [styles.smDialogTitle]: isBelowSmScreen
          })}
        >
          <i
            className={classnames('text-[88px]', {
              'ri-checkbox-circle-line': userInput,
              'ri-close-circle-line': !userInput
            })}
          />
          <Typography>
            {userInput
              ? `${type === 'delete-account' ? 'Deactivated' : type === 'unsubscribe' ? 'Unsubscribed' : 'Suspended!'}`
              : 'Cancelled'}
          </Typography>
          <Typography>
            {userInput ? (
              <>
                {type === 'delete-account' && 'Your account has been deactivated successfully.'}
                {type === 'unsubscribe' && 'Your subscription cancelled successfully.'}
                {type === 'suspend-account' && 'User has been suspended.'}
              </>
            ) : (
              <>
                {type === 'delete-account' && 'Account Deactivation Cancelled!'}
                {type === 'unsubscribe' && 'Unsubscription Cancelled!!'}
                {type === 'suspend-account' && 'Cancelled Suspension :)'}
              </>
            )}
          </Typography>
        </DialogContent>
        <DialogActions
          className={classnames('justify-center', styles.dialogActions, {
            [styles.smDialogActions]: isBelowSmScreen
          })}
        >
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmationDialog
