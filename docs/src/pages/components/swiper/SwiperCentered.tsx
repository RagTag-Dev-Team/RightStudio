// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img16 from '../../../../docs/assets/images/banners/16.jpg'
import img17 from '../../../../docs/assets/images/banners/17.jpg'
import img18 from '../../../../docs/assets/images/banners/18.jpg'
import img19 from '../../../../docs/assets/images/banners/19.jpg'
import img20 from '../../../../docs/assets/images/banners/20.jpg'

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
        <img src={img16} alt='swiper 16' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img17} alt='swiper 17' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img18} alt='swiper 18' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img19} alt='swiper 19' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img20} alt='swiper 20' />
      </div>
    </div>
  )
}

export default SwiperCentered
