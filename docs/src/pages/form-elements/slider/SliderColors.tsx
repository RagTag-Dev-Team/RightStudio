// React Imports
import React from 'react'

// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderColors = () => {
  return (
    <div>
      <Typography className='font-medium'>Primary Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='primary-slider' />
      <Typography className='font-medium'>Secondary Slider</Typography>
      <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
    </div>
  )
}

export default SliderColors
