// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperMultipleSlides = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/11.jpg' alt='swiper 11' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/12.jpg' alt='swiper 12' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/13.jpg' alt='swiper 13' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/14.jpg' alt='swiper 14' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/15.jpg' alt='swiper 15' />
      </Box>
    </Box>
  )
}

export default SwiperMultipleSlides
