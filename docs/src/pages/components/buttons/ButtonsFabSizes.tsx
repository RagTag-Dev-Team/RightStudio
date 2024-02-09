// MUI Imports
import Fab from '@mui/material/Fab'

const ButtonsFabSizes = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <div className='flex gap-4 items-center'>
        <Fab color='primary' aria-label='add' size='small'>
          <i className='tabler-plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <i className='tabler-plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <i className='tabler-plus' />
        </Fab>
      </div>
      <div className='flex gap-4 items-center'>
        <Fab variant='extended' size='small'>
          <i className='tabler-navigation mie-1'/>
          Navigate
        </Fab>
        <Fab variant='extended' size='medium'>
          <i className='tabler-navigation mie-1' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large'>
          <i className='tabler-navigation mie-1'/>
          Navigate
        </Fab>
      </div>
    </div>
  )
}

export default ButtonsFabSizes
