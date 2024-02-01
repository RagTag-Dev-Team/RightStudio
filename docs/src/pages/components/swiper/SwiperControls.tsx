// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'

// Third-party Components
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

const SwiperControls = () => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Hooks
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
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
        {loaded && instanceRef.current && (
          <>
            <i
              className={classnames('ri-arrow-left-s-line arrow arrow-left', {
                'arrow-disabled': currentSlide === 0
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            />

            <i
              className={classnames('ri-arrow-right-s-line arrow arrow-right', {
                'arrow-disabled': currentSlide === instanceRef.current.track.details.slides.length - 1
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='swiper-dots'>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <Badge
                key={idx}
                variant='dot'
                component='div'
                className={classnames({
                  active: currentSlide === idx
                })}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
              ></Badge>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SwiperControls
