'use client'

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
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'
import type { CustomInputHorizontalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'

// Style Imports
import globalDialogStyles from '@components/dialogs/styles.module.css'

type TwoFactorAuthProps = {
  open: boolean
  setOpen: (open: boolean) => void
  direction: Direction
}

const data: CustomInputHorizontalData[] = [
  {
    title: (
      <div className='flex items-center gap-1'>
        <i className='ri-settings-3-line' />
        <Typography className='font-medium'>Authenticator Apps</Typography>
      </div>
    ),
    value: 'app',
    isSelected: true,
    content: 'Get code from an app like Google Authenticator or Microsoft Authenticator.'
  },
  {
    title: (
      <div className='flex items-center gap-1'>
        <i className='ri-wechat-line' />
        <Typography className='font-medium'>SMS</Typography>
      </div>
    ),
    value: 'sms',
    content: 'We will send a code via SMS if you need to use your backup login method.'
  }
]

const SMSDialog = (handleAuthDialogClose: () => void, isBelowSmScreen: boolean) => {
  return (
    <>
      <DialogTitle
        variant='h5'
        className={classnames('flex flex-col gap-2', globalDialogStyles.dialogTitle, {
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
        <IconButton className={globalDialogStyles.closeIcon} onClick={handleAuthDialogClose}>
          <i className='ri-close-line' />
        </IconButton>

        <TextField fullWidth type='number' label='Mobile Number' placeholder='123 456 7890' />
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
        variant='h5'
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
        <IconButton className={globalDialogStyles.closeIcon} onClick={handleAuthDialogClose}>
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
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [authType, setAuthType] = useState<'app' | 'sms'>(initialSelectedOption as 'app')
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

  const handleOptionChange = () => {
    if (authType !== 'app') {
      setAuthType('app')
    } else {
      setAuthType('sms')
    }
  }

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
          <IconButton onClick={handleClose} className={globalDialogStyles.closeIcon}>
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={6}>
            {data.map((item, index) => (
              <CustomInputHorizontal
                key={index}
                type='radio'
                selected={authType}
                handleChange={handleOptionChange}
                data={item}
                gridProps={{ xs: 12 }}
                name='auth-method'
              />
            ))}
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
            className='capitalize'
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
