// React Imports
import React from 'react'

// MUI Imports
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const RatingsHalf = () => {
  return (
    <>
      <div className='mbe-3'>
        <Typography className='font-medium'>Half Ratings</Typography>
        <Rating defaultValue={2.5} precision={0.5} name='half-rating' />
      </div>
      <>
        <Typography className='font-medium'>Read only</Typography>
        <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' />
      </>
    </>
  )
}

export default RatingsHalf
