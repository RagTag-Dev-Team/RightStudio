// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img1 from '../../../../docs/assets/images/banners/1.jpg'
import img2 from '../../../../docs/assets/images/banners/2.jpg'
import img3 from '../../../../docs/assets/images/banners/3.jpg'
import img4 from '../../../../docs/assets/images/banners/4.jpg'
import img5 from '../../../../docs/assets/images/banners/5.jpg'

const SwiperBasic = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>()

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src={img1} alt='swiper 1' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img2} alt='swiper 2' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img3} alt='swiper 3' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img4} alt='swiper 4' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img5} alt='swiper 5' />
      </div>
    </div>
  )
}

export default SwiperBasic
