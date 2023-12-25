// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperVertical = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    slides: {
      perView: 2,
      spacing: 8
    }
  })

  return (
    <div ref={ref} className='keen-slider vertical max-bs-[300px]'>
      {[...Array(10).keys()].map((num: number) => (
        <div key={num} className='keen-slider__slide default-slide'>
          {num + 1}
        </div>
      ))}
    </div>
  )
}

export default SwiperVertical
