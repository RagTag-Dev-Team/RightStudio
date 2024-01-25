// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img9 from '../../../../docs/assets/images/banners/9.jpg'
import img7 from '../../../../docs/assets/images/banners/7.jpg'
import img6 from '../../../../docs/assets/images/banners/6.jpg'
import img10 from '../../../../docs/assets/images/banners/10.jpg'
import img8 from '../../../../docs/assets/images/banners/8.jpg'

const images = [img6, img7, img8, img9, img10]

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

  return (
    <div ref={sliderRef} className='fader md:bs-[395px] sm:bs-[250px] bs-[200px]'>
      {images.map((src, idx) => (
        <Box key={idx} className='fader__slide' sx={{ opacity: opacities[idx] }}>
          <img src={src} alt={`slider ${idx}`} />
        </Box>
      ))}
    </div>
  )
}

export default SwiperFader
