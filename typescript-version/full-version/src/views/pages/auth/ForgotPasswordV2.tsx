'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

const ForgotPasswordV2 = ({ direction }: { direction: Direction }) => {
  return (
    <div className='flex h-full justify-center'>
      <div className='flex items-center justify-center h-full flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center h-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Forgot Password 🔒</Typography>
          <Typography>Enter your email and we&#39;ll send you instructions to reset your password</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth label='Email' />
            <Button fullWidth variant='contained' type='submit'>
              Send reset link
            </Button>
            <Typography className='flex justify-center items-center' color='primary'>
              <Link href='/pages/auth/login-v2' className='flex items-center'>
                <i className={direction === 'rtl' ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'} />
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
