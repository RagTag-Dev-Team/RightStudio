// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsBlank = () => {
  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-checkbox-blank-line mbe-2 text-[28px]' />
      <Typography className='mbe-4' variant='h5'>Blank</Typography>
      <Typography className='mbe-3'>The most basic variant does not have an icon.</Typography>
      <Button className='mbe-8' variant='contained' onClick={() => toast('Blank Toast', {
        hideProgressBar: false,
      })}>
        Blank
      </Button>
    </div>
  )
}

export default ToastsBlank
