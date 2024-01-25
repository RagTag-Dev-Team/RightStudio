// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { TrackDetails } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img6 from '../../../../docs/assets/images/banners/6.jpg'
import img7 from '../../../../docs/assets/images/banners/7.jpg'
import img8 from '../../../../docs/assets/images/banners/8.jpg'
import img9 from '../../../../docs/assets/images/banners/9.jpg'
import img10 from '../../../../docs/assets/images/banners/10.jpg'

const images = [img6, img7, img8, img9, img10]

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
            <img src={src} alt={`slider ${idx}`} />
          </Box>
        </div>
      ))}
    </div>
  )
}

export default SwiperZoom
