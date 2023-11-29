// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperFreeMode = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/21.jpg' alt='swiper 21' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/22.jpg' alt='swiper 22' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/23.jpg' alt='swiper 23' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/24.jpg' alt='swiper 24' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/25.jpg' alt='swiper 25' />
      </div>
    </div>
  )
}

export default SwiperFreeMode
