// MUI Imports
import Button from '@mui/material/Button'

const ButtonsContained = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#' className='hover:text-[var(--mui-palette-primary-contrastText)]'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsContained
