'use client'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const ForgotPasswordV2 = () => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <div className='flex bs-full justify-center'>
      <div className='flex items-center justify-center bs-full flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center bs-full is-[480px]'>
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
              <Link href={getLocalizedUrl('/pages/auth/login-v2', locale as Locale)} className='flex items-center'>
                <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
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
