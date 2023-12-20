'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const TwoStepsV2 = () => {
  return (
    <div className='flex h-full justify-center'>
      <div className='flex h-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center h-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Two Step Verification 💬</Typography>
          <Typography>
            We sent a verification code to your mobile. Enter the code from the mobile in the field below.
          </Typography>
          <Typography className='font-medium'>******1234</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex items-center justify-between'>
              <TextField autoFocus />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
                Resend
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TwoStepsV2
