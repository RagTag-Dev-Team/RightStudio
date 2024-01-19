# How to add RTL in Swiper?

Swiper comes with RTL support which means you can use it with right-to-left languages like Arabic, Hebrew, etc.

Here is an example of Swiper with RTL support:

```tsx
// Third-party Components
import { useTheme } from '@mui/material/styles'
import { useKeenSlider } from 'keen-slider/react'

const SwiperBasic = () => {
  // Hooks
  const theme = useTheme()
  const [ref] = useKeenSlider<HTMLDivElement>({
    rtl: theme.direction === 'rtl',
  })

  return (
    <div ref={ref} className='keen-slider'>
      ...
    </div>
  )
}

export default SwiperBasic
```
