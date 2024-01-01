// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <Chip label='Medium' />
      <Chip label='Small' size='small' />
    </div>
  )
}

export default ChipsSizes
