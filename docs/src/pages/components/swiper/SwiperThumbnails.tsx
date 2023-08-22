// React Imports
import React from 'react'
import type { MutableRefObject } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'

const ThumbnailPlugin = (mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin => {
  return slider => {
    const removeActive = () => {
      slider.slides.forEach(slide => {
        slide.classList.remove('active')
      })
    }

    const addActive = (idx: number) => {
      slider.slides[idx].classList.add('active')
    }

    const addClickEvents = () => {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', main => {
        removeActive()
        const next = main.animator.targetIdx || 0

        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}

const SwiperThumbnails = () => {
  // Hooks
  const theme = useTheme()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>()
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 4,
        spacing: 16
      },
      breakpoints: {
        [`(max-width: ${theme.breakpoints.values.sm}px)`]: {
          slides: {
            perView: 3,
            spacing: 8
          }
        }
      }
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <Box ref={sliderRef} className='keen-slider'>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='/images/banners/1.jpg' alt='swiper 1' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='/images/banners/2.jpg' alt='swiper 2' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='/images/banners/3.jpg' alt='swiper 3' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='/images/banners/4.jpg' alt='swiper 4' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='/images/banners/5.jpg' alt='swiper 5' />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }} ref={thumbnailRef} className='keen-slider thumbnail'>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='/images/banners/1.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='/images/banners/2.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='/images/banners/3.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='/images/banners/4.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='/images/banners/5.jpg' alt='swiper 5' />
        </Box>
      </Box>
    </>
  )
}

export default SwiperThumbnails
