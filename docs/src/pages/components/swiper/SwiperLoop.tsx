// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img7 from '../../../../docs/assets/images/banners/7.jpg'
import img8 from '../../../../docs/assets/images/banners/8.jpg'
import img9 from '../../../../docs/assets/images/banners/9.jpg'
import img10 from '../../../../docs/assets/images/banners/10.jpg'

const SwiperLoop = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src={img7} alt='swiper 7' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img8} alt='swiper 8' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img9} alt='swiper 9' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img10} alt='swiper 10' />
      </div>
    </div>
  )
}

export default SwiperLoop
