// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperLoop = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/7.jpg' alt='swiper 7' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/8.jpg' alt='swiper 8' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/9.jpg' alt='swiper 9' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/10.jpg' alt='swiper 10' />
      </Box>
    </Box>
  )
}

export default SwiperLoop
