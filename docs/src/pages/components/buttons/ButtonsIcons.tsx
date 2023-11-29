// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <div className='flex gap-4'>
      <IconButton aria-label='capture screenshot'>
        <i className='ri-camera-lens-fill' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='primary'>
        <i className='ri-camera-lens-fill' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='secondary'>
        <i className='ri-camera-lens-fill' />
      </IconButton>
      <IconButton aria-label='capture screenshot' disabled>
        <i className='ri-camera-lens-fill' />
      </IconButton>
    </div>
  )
}

export default ButtonsIcons
