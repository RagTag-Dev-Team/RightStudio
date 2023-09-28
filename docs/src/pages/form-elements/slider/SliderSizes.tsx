// React Imports
import React from 'react'

// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderSizes = () => {
  return (
    <div>
      <Typography className='font-medium'>Small</Typography>
      <Slider size='small' defaultValue={30} aria-labelledby='small-slider' />
      <Typography className='font-medium'>Normal</Typography>
      <Slider defaultValue={30} aria-labelledby='normal-slider' />
    </div>
  )
}

export default SliderSizes
