// MUI Imports
import CustomChip from '@core/components/mui/Chip'

const ChipsRound = () => {
  return (
    <div className='flex gap-4'>
        <CustomChip round='true' label='Primary' color='primary' />
        <CustomChip round='true' label='Secondary' color='secondary' />
        <CustomChip round='true' label='Success' color='success' />
        <CustomChip round='true' label='Error' color='error' />
        <CustomChip round='true' label='Warning' color='warning' />
        <CustomChip round='true' label='Info' color='info' />
    </div>
  )
}

export default ChipsRound
