// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NotAuthorized = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex items-center flex-col text-center'>
        <Typography>401</Typography>
        <Typography>You are not authorized! 🔐</Typography>
        <Typography>You don&#39;t have permission to access this page. Go Home!</Typography>
        <div>Image Here</div>
        <Button href='/' component={Link} variant='contained'>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotAuthorized
