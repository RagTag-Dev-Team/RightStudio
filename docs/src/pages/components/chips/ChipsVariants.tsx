// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsVariants = () => {
  return (
    <div className='flex gap-4'>
      <Chip label='Basic' />
      <Chip label='Outlined' variant='outlined' />
      <Chip label='Tonal' variant='tonal' />
    </div>
  )
}

export default ChipsVariants
