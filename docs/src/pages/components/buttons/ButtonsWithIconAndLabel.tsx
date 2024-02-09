// MUI Imports
import Button from '@mui/material/Button'

const ButtonsWithIconAndLabel = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' endIcon={<i className='tabler-send' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<i className='tabler-trash' />}>
        Delete
      </Button>
    </div>
  )
}

export default ButtonsWithIconAndLabel
