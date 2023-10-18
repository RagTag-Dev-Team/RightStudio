// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import InputAdornment from '@mui/material/InputAdornment'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Style Imports
import styles from './styles.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'

type TwoFactorAuthProps = {
  open: boolean
  setOpen: (open: boolean) => void
  direction: Direction
}

const SMSDialog = (handleAuthDialogClose: () => void, isBelowSmScreen: boolean) => {
  return (
    <>
      <DialogTitle
        variant='h5'
        className={classnames(globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Verify Your Mobile Number for SMS
        <Typography component='span' variant='body2' className='flex flex-col'>
          Enter your mobile phone number with country code and we will send you a verification code.
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('overflow-visible', globalDialogStyles.dialogContent, {
          [globalDialogStyles.smDialogContent]: isBelowSmScreen
        })}
      >
        <IconButton className={styles.closeIcon} onClick={handleAuthDialogClose}>
          <i className='ri-close-line' />
        </IconButton>

        <TextField
          fullWidth
          type='number'
          label='Mobile Number'
          placeholder='123 456 7890'
          InputProps={{
            startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
          }}
        />
      </DialogContent>
      <DialogActions
        className={classnames('gap-2', globalDialogStyles.dialogActions, {
          [globalDialogStyles.smDialogAction]: isBelowSmScreen
        })}
      >
        <Button variant='outlined' type='reset' color='secondary' onClick={handleAuthDialogClose}>
          Cancel
        </Button>
        <Button
          color='success'
          variant='contained'
          type='submit'
          endIcon={<i className='ri-check-line' />}
          onClick={handleAuthDialogClose}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  )
}

const AppDialog = (handleAuthDialogClose: () => void, isBelowSmScreen: boolean) => {
  return (
    <>
      <DialogTitle
        className={classnames('text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Add Authenticator App
      </DialogTitle>
      <DialogContent
        className={classnames('flex flex-col gap-6', globalDialogStyles.dialogContent, {
          [globalDialogStyles.smDialogContent]: isBelowSmScreen
        })}
      >
        <IconButton className={styles.closeIcon} onClick={handleAuthDialogClose}>
          <i className='ri-close-line' />
        </IconButton>
        <div className='flex flex-col gap-2'>
          <Typography variant='h6'>Authenticator Apps</Typography>
          <Typography variant='body2'>
            Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the
            QR code. It will generate a 6 digit code for you to enter below.
          </Typography>
        </div>
        <div className='flex justify-center'>
          <img alt='qr-code' src='/images/pages/themeselection-qr.png' />
        </div>
        <div className='flex flex-col gap-4'>
          <Alert severity='warning' icon={false}>
            <AlertTitle>ASDLKNASDA9AHS678dGhASD78AB</AlertTitle>
            If you having trouble using the QR code, select manual entry on your app
          </Alert>
          <TextField fullWidth label='Enter Authentication Code' placeholder='Enter Authentication Code' />
        </div>
      </DialogContent>
      <DialogActions
        className={classnames('gap-2', globalDialogStyles.dialogActions, {
          [globalDialogStyles.smDialogAction]: isBelowSmScreen
        })}
      >
        <Button variant='outlined' type='reset' color='secondary' onClick={handleAuthDialogClose}>
          Cancel
        </Button>
        <Button
          color='success'
          variant='contained'
          type='submit'
          endIcon={<i className='ri-check-line' />}
          onClick={handleAuthDialogClose}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  )
}

const TwoFactorAuth = ({ open, setOpen, direction }: TwoFactorAuthProps) => {
  // States
  const [authType, setAuthType] = useState<'app' | 'sms'>('app')
  const [showAuthDialog, setShowAuthDialog] = useState<boolean>(false)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
    if (authType !== 'app') {
      setAuthType('app')
    }
  }

  const handleAuthDialogClose = () => {
    setShowAuthDialog(false)
    setShowAuthDialog(false)
    if (authType !== 'app') {
      setTimeout(() => {
        setAuthType('app')
      }, 250)
    }
  }

  const arrowIcon = direction === 'ltr' ? 'ri-arrow-right-line' : 'ri-arrow-left-line'

  return (
    <>
      <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          variant='h5'
          className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
            [globalDialogStyles.smDialogTitle]: isBelowSmScreen
          })}
        >
          Select Authentication Method
          <Typography component='span' variant='body2' className='flex flex-col text-center'>
            You also need to select a method by which the proxy authenticates to the directory serve.
          </Typography>
        </DialogTitle>
        <DialogContent
          className={classnames(globalDialogStyles.dialogContent, {
            [globalDialogStyles.smDialogContent]: isBelowSmScreen
          })}
        >
          <IconButton onClick={handleClose} className={styles.closeIcon}>
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div
                onClick={() => {
                  if (authType !== 'app') {
                    setAuthType('app')
                  }
                }}
                className={classnames('cursor-pointer', styles.border, {
                  [styles.active]: authType === 'app'
                })}
              >
                <div
                  className={classnames('flex items-center text-start gap-5', styles.authMethod, {
                    'flex-col !text-center': isBelowSmScreen
                  })}
                >
                  <i className='ri-settings-4-line text-[38px]' />
                  <div className='flex flex-col gap-2'>
                    <Typography variant='body1' className={styles.text}>
                      Authenticator Apps
                    </Typography>
                    <Typography variant='body2' className={styles.text}>
                      Get code from an app like Google Authenticator or Microsoft Authenticator.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                onClick={() => setAuthType('sms')}
                className={classnames('cursor-pointer', styles.border, {
                  [styles.active]: authType === 'sms'
                })}
              >
                <div
                  className={classnames('flex items-center text-start gap-5', styles.authMethod, {
                    'flex-col !text-center': isBelowSmScreen
                  })}
                >
                  <i className='ri-message-2-line text-[38px]' />
                  <div className='flex flex-col gap-2'>
                    <Typography variant='body1' className={styles.text}>
                      SMS
                    </Typography>
                    <Typography variant='body2' className={styles.text}>
                      We will send a code via SMS if you need to use your backup login method.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          className={classnames(globalDialogStyles.dialogActions, {
            [globalDialogStyles.smDialogAction]: isBelowSmScreen
          })}
        >
          <Button
            variant='contained'
            endIcon={<i className={arrowIcon} />}
            onClick={() => {
              setOpen(false)
              setShowAuthDialog(true)
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog fullWidth maxWidth='md' scroll='body' open={showAuthDialog} onClose={handleAuthDialogClose}>
        <form onSubmit={e => e.preventDefault()}>
          {authType === 'sms'
            ? SMSDialog(handleAuthDialogClose, isBelowSmScreen)
            : AppDialog(handleAuthDialogClose, isBelowSmScreen)}
        </form>
      </Dialog>
    </>
  )
}

export default TwoFactorAuth
