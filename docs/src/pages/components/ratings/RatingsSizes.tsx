// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

const RatingsSizes = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Rating defaultValue={2} name='size-small' size='small' />
      <Rating defaultValue={2} name='size-medium' />
      <Rating defaultValue={2} name='size-large' size='large' />
    </Box>
  )
}

export default RatingsSizes
