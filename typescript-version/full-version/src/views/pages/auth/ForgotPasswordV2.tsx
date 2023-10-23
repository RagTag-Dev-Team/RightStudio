'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './forgotPassword.module.css'
import commonStyles from '@/styles/common.module.css'

const ForgotPasswordV2 = () => {
  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && <div className={'flex items-center justify-center h-full flex-1'}>image</div>}
      <div className={classnames('flex justify-center items-center h-full', styles.rightWrapper)}>
        <div>
          <div className={classnames('absolute', styles.templateName)}>Logo</div>
          <Typography>Forgot Password 🔒</Typography>
          <Typography>Enter your email and we&#39;ll send you instructions to reset your password</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth label='Email' />
            <Button fullWidth variant='contained' type='submit'>
              Send reset link
            </Button>
            <Typography className={classnames('flex justify-center items-center', commonStyles.primaryColor)}>
              <Link href='/pages/auth/login-v2' className='flex items-center'>
                <i className='ri-arrow-left-s-line' />
                <span>Back to Login</span>
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordV2
