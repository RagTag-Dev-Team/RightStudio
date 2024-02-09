// MUI Imports
import IconButton from '@mui/material/IconButton'

const ButtonsIcons = () => {
  return (
    <div className='flex gap-4'>
      <IconButton aria-label='capture screenshot'>
        <i className='tabler-aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='primary'>
        <i className='tabler-aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='secondary'>
        <i className='tabler-aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' disabled>
        <i className='tabler-aperture' />
      </IconButton>
    </div>
  )
}

export default ButtonsIcons
