// React Imports
import React from 'react'

// MUI Imports
import Slider from '@mui/material/Slider'

const SliderRange = () => {
  return (
    <Slider
      defaultValue={[20, 37]}
      valueLabelDisplay='auto'
      aria-labelledby='range-slider'
    />
  )
}

export default SliderRange
