// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperCentered = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16,
      origin: 'center'
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/26.jpg' alt='swiper 26' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/27.jpg' alt='swiper 27' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/28.jpg' alt='swiper 28' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/29.jpg' alt='swiper 29' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/30.jpg' alt='swiper 30' />
      </Box>
    </Box>
  )
}

export default SwiperCentered
