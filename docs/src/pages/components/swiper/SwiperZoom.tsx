// React Imports
import React, { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { TrackDetails } from 'keen-slider/react'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

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

  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <div ref={sliderRef} className={classnames('keen-slider zoom-out', {[styles.swiperCommonHeight395]: isAboveMdScreen,
      [styles.swiperCommonHeight250]: isBelowMdScreen, 
      [styles.swiperCommonHeight200]: isBelowSmScreen})}>
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
