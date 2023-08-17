// React Imports
import React, { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider/react'

const MutationPlugin: KeenSliderPlugin = slider => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(() => {
      slider.update()
    })
  })
  const config = { childList: true }

  slider.on('created', () => {
    observer.observe(slider.container, config)
  })
  slider.on('destroyed', () => {
    observer.disconnect()
  })
}

const SwiperMutationObserver = () => {
  // States
  const [slides, setSlides] = useState<number[]>([1])

  // Hooks
  const theme = useTheme()
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 3,
        spacing: 16
      },
      breakpoints: {
        [`(max-width: ${theme.breakpoints.values.sm}px)`]: {
          slides: { perView: 1, spacing: 16 }
        }
      }
    },
    [MutationPlugin]
  )

  return (
    <>
      <Box ref={ref} className='keen-slider'>
        {slides.map(slide => {
          return (
            <Box key={slide} className='keen-slider__slide default-slide'>
              <Typography variant='h1'>{slide}</Typography>
            </Box>
          )
        })}
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='contained' onClick={() => setSlides([...slides, slides.length + 1])}>
          Add
        </Button>
        <Button variant='contained' color='error' onClick={() => setSlides(slides.slice(0, -1))}>
          Remove
        </Button>
      </Box>
    </>
  )
}

export default SwiperMutationObserver
