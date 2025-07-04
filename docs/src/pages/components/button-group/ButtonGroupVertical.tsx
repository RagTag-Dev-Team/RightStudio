// MUI Imports
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const ButtonGroupVertical = () => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <ButtonGroup variant='outlined' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='tonal' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='contained' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

export default ButtonGroupVertical
