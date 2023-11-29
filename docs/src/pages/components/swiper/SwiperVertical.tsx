// Third-party Components
import { useKeenSlider } from 'keen-slider/react'
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

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
    <div ref={ref} className={classnames('keen-slider vertical', styles.swiperMaxHeight)}>
      {[...Array(10).keys()].map((num: number) => (
        <div key={num} className='keen-slider__slide default-slide'>
          {num + 1}
        </div>
      ))}
    </div>
  )
}

export default SwiperVertical
