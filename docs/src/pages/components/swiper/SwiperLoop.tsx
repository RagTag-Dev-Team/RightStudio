// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

const SwiperLoop = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/7.jpg')} alt='swiper 7' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/8.jpg')} alt='swiper 8' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/9.jpg')} alt='swiper 9' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/10.jpg')} alt='swiper 10' />
      </div>
    </div>
  )
}

export default SwiperLoop
