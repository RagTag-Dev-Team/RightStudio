// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsEmoji = () => {
  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-emoji-sticker-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Emoji</Typography>
      <Typography className='mbe-3'>Add any emoji instead of an icon</Typography>
      <Button className='mbe-8' variant='contained' onClick={() => toast('Good Job!', { icon: '👏' })}>
        Emoji
      </Button>
    </div>
  )
}

export default ToastsEmoji
