// MUI Imports
import Chip from '@mui/material/Chip'

const ChipsClickable = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  return (
    <div className='flex gap-4'>
      <Chip label='Clickable' onClick={handleClick} />
      <Chip label='Clickable Link' component='a' href='https://themeselection.com/' target='_blank' clickable />
    </div>
  )
}

export default ChipsClickable
