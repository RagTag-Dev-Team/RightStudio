// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img11 from '../../../../docs/assets/images/banners/11.jpg'
import img12 from '../../../../docs/assets/images/banners/12.jpg'
import img13 from '../../../../docs/assets/images/banners/13.jpg'
import img14 from '../../../../docs/assets/images/banners/14.jpg'
import img15 from '../../../../docs/assets/images/banners/15.jpg'

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
        <img src={img11} alt='swiper 11' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img12} alt='swiper 12' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img13} alt='swiper 13' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img14} alt='swiper 14' />
      </div>
      <div className='keen-slider__slide'>
        <img src={img15} alt='swiper 15' />
      </div>
    </div>
  )
}

export default SwiperMultipleSlides
