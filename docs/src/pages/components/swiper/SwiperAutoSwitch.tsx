// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperAutoSwitch = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      slider => {
        let mouseOver = false
        let timeout: number | ReturnType<typeof setTimeout>
        const clearNextTimeout = () => {
          clearTimeout(timeout as number)
        }
        const nextTimeout = () => {
          clearTimeout(timeout as number)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/1.jpg' alt='swiper 1' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/2.jpg' alt='swiper 2' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/3.jpg' alt='swiper 3' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/4.jpg' alt='swiper 4' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/5.jpg' alt='swiper 5' />
      </div>
    </div>
  )
}

export default SwiperAutoSwitch
