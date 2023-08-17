// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperDefault = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>()

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/1.jpg' alt='swiper 1' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/2.jpg' alt='swiper 2' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/3.jpg' alt='swiper 3' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/4.jpg' alt='swiper 4' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/5.jpg' alt='swiper 5' />
      </Box>
    </Box>
  )
}

export default SwiperDefault
