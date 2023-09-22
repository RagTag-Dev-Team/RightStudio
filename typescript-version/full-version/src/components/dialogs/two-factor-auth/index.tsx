// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Styles Imports
import styles from './styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

const TwoFactorAuth = ({ open, setOpen }: Props) => {
  // States
  const [authType, setAuthType] = useState<'app' | 'sms'>('app')
  const [showAuthDialog, setShowAuthDialog] = useState<boolean>(false)

  // Hooks
  const theme = useTheme()

  const handleClose = () => {
    setOpen(false)
    setAuthType('app')
  }

  const handleAuthDialogClose = () => {
    setShowAuthDialog(false)
    if (open) {
      setOpen(false)
    }
    setShowAuthDialog(false)
    if (authType !== 'app') {
      setTimeout(() => {
        setAuthType('app')
      }, 250)
    }
  }

  const arrowIcon = theme.direction === 'ltr' ? 'mdi:chevron-right' : 'mdi:chevron-left'

  return (
    <>
      <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <IconButton onClick={handleClose} className={styles.closeIcon}>
            <Icon icon='mdi:close' />
          </IconButton>
          <Grid container>
            <Grid item xs={12}>
              <div className='flex justify-center gap-3 flex-col items-center'>
                <Typography>Two Factor Authentication</Typography>
                <Typography>
                  You also need to select a method by which the proxy authenticates to the directory serve.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                onClick={() => setAuthType('app')}
                className={classnames('cursor-pointer', {
                  [styles.active]: authType === 'app',
                  [styles.inactive]: authType !== 'app'
                })}
              >
                <div className='flex items-center text-start'>
                  <div className='flex'>
                    <Icon icon='mdi:cog-outline' fontSize='2.375rem' />
                  </div>
                  <div>
                    <Typography>Authenticator Apps</Typography>
                    <Typography>Get code from an app like Google Authenticator or Microsoft Authenticator.</Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                onClick={() => setAuthType('sms')}
                className={classnames('cursor-pointer', {
                  [styles.active]: authType === 'sms',
                  [styles.inactive]: authType !== 'sms'
                })}
              >
                <div className='flex items-center text-start'>
                  <div className='flex'>
                    <Icon icon='mdi:message-outline' fontSize='2.375rem' />
                  </div>
                  <div>
                    <Typography>sms</Typography>
                    <Typography>We will send a code via SMS if you need to use your backup login method.</Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className='flex justify-end'>
              <Button
                variant='contained'
                endIcon={<Icon icon={arrowIcon} />}
                onClick={() => {
                  setOpen(false)
                  setShowAuthDialog(true)
                }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Dialog fullWidth maxWidth='md' scroll='body' open={showAuthDialog} onClose={handleAuthDialogClose}>
        <DialogContent>
          <IconButton size='small' className={styles.closeIcon} onClick={handleAuthDialogClose}>
            <Icon icon='mdi:close' />
          </IconButton>
          {authType === 'sms' ? (
            <>
              <Typography>Verify Your Mobile Number for SMS</Typography>
              <Typography>
                Enter your mobile phone number with country code and we will send you a verification code.
              </Typography>
              <TextField fullWidth type='number' label='Mobile Number' placeholder='123 456 7890' />
              <div className='flex justify-end gap-4'>
                <Button variant='outlined' color='secondary' onClick={handleAuthDialogClose}>
                  Cancel
                </Button>
                <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                  Continue
                </Button>
              </div>
            </>
          ) : (
            <>
              <Typography className='text-center'>Add Authenticator App</Typography>
              <Typography>Authenticator Apps</Typography>
              <Typography>
                Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan
                the QR code. It will generate a 6 digit code for you to enter below.
              </Typography>
              <div className='flex justify-center'>
                <img alt='qr-code' src='/images/pages/themeselection-qr.png' />
              </div>
              <Alert severity='warning' icon={false}>
                <AlertTitle>ASDLKNASDA9AHS678dGhASD78AB</AlertTitle>
                If you having trouble using the QR code, select manual entry on your app
              </Alert>
              <TextField fullWidth label='Enter Authentication Code' placeholder='Enter Authentication Code' />
              <div className='flex justify-end gap-4'>
                <Button variant='outlined' color='secondary' onClick={handleAuthDialogClose}>
                  Cancel
                </Button>
                <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                  Continue
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TwoFactorAuth
