// React Imports
import { useState } from 'react'

// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsBasic = () => {
  // States
  const [value, setValue] = useState<number | null>(2)

  return (
    <>
      <div className='mbe-3'>
        <Typography className='font-medium'>Controlled</Typography>
        <Rating value={value} name='basic-controlled' onChange={(event, newValue) => setValue(newValue)} />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Read only</Typography>
        <Rating readOnly value={value} name='read-only' />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Disabled</Typography>
        <Rating disabled value={value} name='disabled' />
      </div>
      <div>
        <Typography className='font-medium'>No rating given</Typography>
        <Rating value={null} name='no-value' />
      </div>
    </>
  )
}

export default RatingsBasic
