// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img21 from '../../../../docs/assets/images/banners/21.jpg'
import img22 from '../../../../docs/assets/images/banners/22.jpg'
import img23 from '../../../../docs/assets/images/banners/23.jpg'
import img24 from '../../../../docs/assets/images/banners/24.jpg'
import img25 from '../../../../docs/assets/images/banners/25.jpg'

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
        <img src={img21} alt='swiper 21' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img22} alt='swiper 22' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img23} alt='swiper 23' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img24} alt='swiper 24' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img25} alt='swiper 25' />
      </div>
    </div>
  )
}

export default SwiperFreeMode
