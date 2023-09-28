// React Imports
import React from 'react'

// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperCentered = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16,
      origin: 'center'
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/26.jpg' alt='swiper 26' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/27.jpg' alt='swiper 27' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/28.jpg' alt='swiper 28' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/29.jpg' alt='swiper 29' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/30.jpg' alt='swiper 30' />
      </div>
    </div>
  )
}

export default SwiperCentered
