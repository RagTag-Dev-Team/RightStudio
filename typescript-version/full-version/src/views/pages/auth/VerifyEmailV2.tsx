'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const VerifyEmailV2 = () => {
  return (
    <div className='flex h-full justify-center'>
      <div className='flex h-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center h-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Verify your email ✉️</Typography>
          <Typography>
            Account activation link sent to your email address: john.doe@email.com Please follow the link inside to
            continue.
          </Typography>
          <Button fullWidth variant='contained' type='submit'>
            Skip For Now
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Didn&#39;t get the mail?</Typography>
            <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
              Resend
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailV2
