// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Component Imports
import Form from '@components/Form'
import Link from '@components/Link'

const TwoStepsV2 = () => {
  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center bs-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Two Step Verification 💬</Typography>
          <Typography>
            We sent a verification code to your mobile. Enter the code from the mobile in the field below.
          </Typography>
          <Typography className='font-medium'>******1234</Typography>
          <Form noValidate autoComplete='off'>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex items-center justify-between'>
              <TextField autoFocus className='[&_input]:text-center' />
              <TextField className='[&_input]:text-center' />
              <TextField className='[&_input]:text-center' />
              <TextField className='[&_input]:text-center' />
              <TextField className='[&_input]:text-center' />
              <TextField className='[&_input]:text-center' />
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography color='primary' component={Link}>
                Resend
              </Typography>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default TwoStepsV2
