// MUI Imports
import Rating from '@mui/material/Rating'

const RatingsSizes = () => {
  return (
    <div className='flex flex-col items-start gap-4'>
      <Rating defaultValue={2} name='size-small' size='small' />
      <Rating defaultValue={2} name='size-medium' />
      <Rating defaultValue={2} name='size-large' size='large' />
    </div>
  )
}

export default RatingsSizes
