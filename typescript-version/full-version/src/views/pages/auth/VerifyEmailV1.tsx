// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import Link from '@components/Link'

const VerifyEmailV1 = () => {
  return (
    <Card className='flex flex-col is-[450px]'>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
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
      </CardContent>
    </Card>
  )
}

export default VerifyEmailV1
