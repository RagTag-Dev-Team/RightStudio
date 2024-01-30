// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

const SwiperBasic = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>()

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/1.jpg')} alt='swiper 1' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/2.jpg')} alt='swiper 2' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/3.jpg')} alt='swiper 3' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/4.jpg')} alt='swiper 4' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/5.jpg')} alt='swiper 5' />
      </div>
    </div>
  )
}

export default SwiperBasic
