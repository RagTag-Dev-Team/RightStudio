// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { TrackDetails } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

const images = [
  '/images/banners/6.jpg',
  '/images/banners/7.jpg',
  '/images/banners/8.jpg',
  '/images/banners/9.jpg',
  '/images/banners/10.jpg'
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
  const theme = useTheme()

  return (
    <div ref={sliderRef} className='keen-slider zoom-out md:bs-[395px] sm:bs-[250px] bs-[200px]'>
      {images.map((src, idx) => (
        <div key={idx} className='keen-slider__slide zoom-out__slide'>
          <Box className='slider-content-wrapper' sx={{ ...scaleStyle(idx) }}>
            <img src={`${useBaseUrl(src)}`} alt={`slider ${idx}`} />
          </Box>
        </div>
      ))}
    </div>
  )
}

export default SwiperZoom
