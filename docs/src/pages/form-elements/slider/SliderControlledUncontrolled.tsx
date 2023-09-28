// React Imports
import React, { useState } from 'react'

// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderControlledUncontrolled = () => {
  // States
  const [value, setValue] = useState<number>(30)

  return (
    <div>
      <Typography className='font-medium'>Controlled Slider</Typography>
      <Slider
        value={value}
        aria-labelledby='controlled-slider'
        onChange={(event, newValue: number | number[]) => setValue(newValue as number)}
      />
      <Typography className='font-medium'>Uncontrolled Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='uncontrolled-slider' />
    </div>
  )
}

export default SliderControlledUncontrolled
