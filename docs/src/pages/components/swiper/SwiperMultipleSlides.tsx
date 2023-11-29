// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperMultipleSlides = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/11.jpg' alt='swiper 11' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/12.jpg' alt='swiper 12' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/13.jpg' alt='swiper 13' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/14.jpg' alt='swiper 14' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/15.jpg' alt='swiper 15' />
      </div>
    </div>
  )
}

export default SwiperMultipleSlides
