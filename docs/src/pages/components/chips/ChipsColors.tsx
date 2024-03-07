// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsColors = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Filled Chips</Typography>
      <div className='flex gap-4 flex-wrap'>
        <Chip label='Primary' color='primary' />
        <Chip label='Secondary' color='secondary' />
        <Chip label='Success' color='success' />
        <Chip label='Error' color='error' />
        <Chip label='Warning' color='warning' />
        <Chip label='Info' color='info' />
      </div>
      <Typography className='font-medium'>Outlined Chips</Typography>
      <div className='flex gap-4 flex-wrap'>
        <Chip label='Primary' color='primary' variant='outlined' />
        <Chip label='Secondary' color='secondary' variant='outlined' />
        <Chip label='Success' color='success' variant='outlined' />
        <Chip label='Error' color='error' variant='outlined' />
        <Chip label='Warning' color='warning' variant='outlined' />
        <Chip label='Info' color='info' variant='outlined' />
      </div>
      <Typography className='font-medium'>Tonal Chips</Typography>
      <div className='flex gap-4 flex-wrap'>
        <Chip label='Primary' color='primary' variant='tonal' />
        <Chip label='Secondary' color='secondary' variant='tonal' />
        <Chip label='Success' color='success' variant='tonal' />
        <Chip label='Error' color='error' variant='tonal' />
        <Chip label='Warning' color='warning' variant='tonal' />
        <Chip label='Info' color='info' variant='tonal' />
      </div>
    </div>
  )
}

export default ChipsColors
