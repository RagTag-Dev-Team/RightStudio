// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsIcon = () => {
  return (
    <div className='flex gap-4'>
      <Chip label='Low Battery' icon={<i className='ri-battery-line' />} />
      <Chip
        label='Full Battery'
        color='primary'
        variant='outlined'
        icon={<i className='ri-battery-fill' />}
      />
    </div>
  )
}

export default ChipsIcon
