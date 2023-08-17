// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperFreeMode = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <Box ref={ref} className='keen-slider'>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/21.jpg' alt='swiper 21' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/22.jpg' alt='swiper 22' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/23.jpg' alt='swiper 23' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/24.jpg' alt='swiper 24' />
      </Box>
      <Box className='keen-slider__slide'>
        <img src='/img/banners/25.jpg' alt='swiper 25' />
      </Box>
    </Box>
  )
}

export default SwiperFreeMode
