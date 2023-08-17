// React Imports
import React, { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { TrackDetails } from 'keen-slider/react'

const images = [
  '/img/banners/6.jpg',
  '/img/banners/7.jpg',
  '/img/banners/8.jpg',
  '/img/banners/9.jpg',
  '/img/banners/10.jpg'
]

const SwiperZoom = () => {
  // States
  const [details, setDetails] = useState<TrackDetails | null>(null)

  // Hooks
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 2,
    detailsChanged(s) {
      setDetails(s.track.details)
    }
  })

  const scaleStyle = (idx: number) => {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 1
    const scale = 1 - (scale_size - scale_size * slide.portion)

    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`
    }
  }

  return (
    <Box ref={sliderRef} className='keen-slider zoom-out' sx={{ height: [200, 250, 395] }}>
      {images.map((src, idx) => (
        <Box key={idx} className='keen-slider__slide zoom-out__slide'>
          <Box className='slider-content-wrapper' sx={{ ...scaleStyle(idx) }}>
            <img src={src} alt={`slider ${idx}`} />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default SwiperZoom
