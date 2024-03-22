// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import Link from '@components/Link'

const VerifyEmailV2 = () => {
  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center bs-full is-[480px]'>
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
            <Typography color='primary' component={Link}>
              Resend
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailV2
