// React Imports
import type { MutableRefObject } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img1 from '../../../../docs/assets/images/banners/1.jpg'
import img2 from '../../../../docs/assets/images/banners/2.jpg'
import img3 from '../../../../docs/assets/images/banners/3.jpg'
import img4 from '../../../../docs/assets/images/banners/4.jpg'
import img5 from '../../../../docs/assets/images/banners/5.jpg'

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
          <img src={img1} alt='swiper 1' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={img2} alt='swiper 2' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={img3} alt='swiper 3' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={img4} alt='swiper 4' />
        </div>
        <div className='flex keen-slider__slide'>
          <img src={img5} alt='swiper 5' />
        </div>
      </div>

      <div ref={thumbnailRef} className='mbs-4 keen-slider thumbnail'>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={img1} alt='swiper 1' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={img2} alt='swiper 2' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={img3} alt='swiper 3' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={img4} alt='swiper 4' />
        </div>
        <div className='keen-slider__slide cursor-pointer'>
          <img src={img5} alt='swiper 5' />
        </div>
      </div>
    </>
  )
}

export default SwiperThumbnails
