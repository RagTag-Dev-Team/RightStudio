// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsMultiLine = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }

  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-file-text-line mbe-2 text-[28px]'/>
      <Typography className='mbe-4' variant='h6'>Multi Line</Typography>
      <Typography className='mbe-3'>The most basic variant with longer texts</Typography>
      <Button className='mbe-8'variant='contained' onClick={handleClick}>
        Multi Line
      </Button>
    </div>
  )
}

export default ToastsMultiLine
