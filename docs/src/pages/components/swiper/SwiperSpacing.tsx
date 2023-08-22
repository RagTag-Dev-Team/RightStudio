// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperSpacing = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/images/banners/16.jpg' alt='swiper 16' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/images/banners/17.jpg' alt='swiper 17' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/images/banners/18.jpg' alt='swiper 18' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/images/banners/19.jpg' alt='swiper 19' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/images/banners/20.jpg' alt='swiper 20' />
      </Box>
    </Box>
  )
}

export default SwiperSpacing
