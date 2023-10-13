// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  type: 'delete-account' | 'unsubscribe'
}

const ConfirmationDialog = ({ open, setOpen, type }: Props) => {
  // States
  const [secondDialog, setSecondDialog] = useState(false)
  const [userInput, setUserInput] = useState(false)

  const handleSecondDialogClose = () => {
    setSecondDialog(false)
    setOpen(false)
  }

  const handleConfirmation = (value: boolean) => {
    setUserInput(value)
    setSecondDialog(true)
    setOpen(false)
  }

  return (
    <>
      <Dialog fullWidth maxWidth='xs' open={open} onClose={() => setOpen(false)}>
        <DialogContent className='flex items-center flex-col text-center'>
          <i className='ri-error-warning-line text-[88px]' />
          <Typography>
            {type === 'delete-account'
              ? 'Are you sure you want to deactivate your account?'
              : 'Are you sure to cancel your subscription?'}
          </Typography>
        </DialogContent>
        <DialogActions className='gap-2 justify-center'>
          <Button variant='contained' onClick={() => handleConfirmation(true)}>
            Yes
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
        <DialogContent className='flex items-center flex-col text-center'>
          <i className={classnames(userInput ? 'ri-checkbox-circle-line' : 'ri-close-circle-line', 'text-[88px]')} />
          <Typography>
            {userInput ? `${type === 'delete-account' ? 'Deactivated' : 'Unsubscribed'}` : 'Cancelled'}
          </Typography>
          <Typography>
            {userInput
              ? `${
                  type === 'delete-account'
                    ? 'Your account has been deactivated successfully.'
                    : 'Your subscription cancelled successfully.'
                }`
              : `${type === 'delete-account' ? 'Account Deactivation Cancelled!' : 'Unsubscription Cancelled!!'}`}
          </Typography>
        </DialogContent>
        <DialogActions className='justify-center'>
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ConfirmationDialog
