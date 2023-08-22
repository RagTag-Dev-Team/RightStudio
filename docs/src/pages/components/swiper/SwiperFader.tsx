// React Imports
import React, { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const images = [
  '/images/banners/9.jpg',
  '/images/banners/7.jpg',
  '/images/banners/6.jpg',
  '/images/banners/10.jpg',
  '/images/banners/8.jpg'
]

const SwiperFader = () => {
  // States
  const [opacities, setOpacities] = useState<number[]>([])

  // Hooks
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: images.length,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(slide => slide.portion)

      setOpacities(new_opacities)
    }
  })

  return (
    <Box ref={sliderRef} className='fader' sx={{ height: [200, 250, 395] }}>
      {images.map((src, idx) => (
        <Box key={idx} className='fader__slide' sx={{ opacity: opacities[idx] }}>
          <img src={src} alt={`slider ${idx}`} />
        </Box>
      ))}
    </Box>
  )
}

export default SwiperFader
