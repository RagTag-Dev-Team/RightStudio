// MUI Imports
import Slider from '@mui/material/Slider'

// Styles Imports
import styles from './styles.module.css'

const marks = [
  {
    value: 0,
    label: '0°'
  },
  {
    value: 20,
    label: '20°'
  },
  {
    value: 37,
    label: '37°'
  },
  {
    value: 100,
    label: '100°'
  }
]

const valuetext = (value: number) => {
  return `${value}°C`
}

const SliderVertical = () => {
  return (
    <div className={styles.sliderVertical}>
      <Slider orientation='vertical' getAriaValueText={valuetext} defaultValue={30} aria-labelledby='vertical-slider' className='mie-8'/>
      <Slider
        disabled
        defaultValue={30}
        orientation='vertical'
        getAriaValueText={valuetext}
        aria-labelledby='vertical-disabled-slider' className='mie-8'
      />
      <Slider
        marks={marks}
        orientation='vertical'
        defaultValue={[20, 37]}
        getAriaValueText={valuetext}
        aria-labelledby='vertical-marks-slider'
        className='mie-0'
      />
    </div>
  )
}

export default SliderVertical
