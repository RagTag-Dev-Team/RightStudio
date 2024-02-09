// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsIcon = () => {
  return (
    <div className='flex gap-4'>
      <Chip label='Low Battery' icon={<i className='tabler-battery-1' />} />
      <Chip
        label='Full Battery'
        color='primary'
        variant='outlined'
        icon={<i className='tabler-battery-4' />}
      />
    </div>
  )
}

export default ChipsIcon
