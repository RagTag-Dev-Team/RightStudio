// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NotFound = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex items-center flex-col text-center'>
        <Typography>404</Typography>
        <Typography>Page Not Found ⚠️</Typography>
        <Typography>We couldn&#39;t find the page you are looking for.</Typography>
        <div>Image Here</div>
        <Button href='/' component={Link} variant='contained'>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
