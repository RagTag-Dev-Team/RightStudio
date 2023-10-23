// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Component Imports
import Form from '@components/Form'

const ComingSoon = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex items-center flex-col text-center'>
        <Typography>We are launching soon 🚀</Typography>
        <Typography>Our website is opening soon. Please register to get notified when it&#39;s ready!</Typography>
        <Form noValidate autoComplete='off'>
          <div className='flex justify-center'>
            <TextField autoFocus size='small' type='email' placeholder='Enter your email' />
            <Button type='submit' variant='contained'>
              Notify
            </Button>
          </div>
        </Form>
        <div>Image Here</div>
      </div>
    </div>
  )
}

export default ComingSoon
