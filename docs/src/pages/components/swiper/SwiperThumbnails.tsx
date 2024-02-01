// React Imports
import type { MutableRefObject } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

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
      <div ref={sliderRef} className='keen-slider'>
        <div className='flex keen-slider__slide'>
          <img src={useBaseUrl('/images/banners/1.jpg')} alt='swiper 1' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={useBaseUrl('/images/banners/2.jpg')} alt='swiper 2' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={useBaseUrl('/images/banners/3.jpg')} alt='swiper 3' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={useBaseUrl('/images/banners/4.jpg')} alt='swiper 4' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={useBaseUrl('/images/banners/5.jpg')} alt='swiper 5' />
        </div>
      </div>

      <div ref={thumbnailRef} className='mbs-4 keen-slider thumbnail'>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={useBaseUrl('/images/banners/1.jpg')} alt='swiper 1' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={useBaseUrl('/images/banners/2.jpg')} alt='swiper 2' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={useBaseUrl('/images/banners/3.jpg')} alt='swiper 3' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={useBaseUrl('/images/banners/4.jpg')} alt='swiper 4' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={useBaseUrl('/images/banners/5.jpg')} alt='swiper 5' />
        </div>
      </div>
    </>
  )
}

export default SwiperThumbnails
