// MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const ButtonsSizes = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex gap-4 items-center'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='flex gap-4 items-center'>
        <IconButton aria-label='capture screenshot' color='primary' size='small'>
          <i className='ri-camera-lens-fill text-xl' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='primary'>
          <i className='ri-camera-lens-fill' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='primary' size='large'>
          <i className='ri-camera-lens-fill text-[28px]' />
        </IconButton>
      </div>
    </div>
  )
}

export default ButtonsSizes
