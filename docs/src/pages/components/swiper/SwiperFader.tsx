// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

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
  const theme = useTheme()
  const isAboveMdScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div ref={sliderRef}
    className={classnames('fader', {[styles.swiperCommonHeight395]: isAboveMdScreen,
      [styles.swiperCommonHeight250]: isBelowMdScreen, 
      [styles.swiperCommonHeight200]: isBelowSmScreen})}
    >
      {images.map((src, idx) => (
        <Box key={idx} className='fader__slide' sx={{ opacity: opacities[idx] }}>
          <img src={src} alt={`slider ${idx}`} />
        </Box>
      ))}
    </div>
  )
}

export default SwiperFader
