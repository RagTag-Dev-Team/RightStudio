// MUI Imports
import Button from '@mui/material/Button'

const ButtonsText = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>
        Secondary
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsText
