// MUI Imports
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import type { IconContainerProps } from '@mui/material/Rating'

type CustomIcons = {
  [index: string]: { icon: string; label: string }
}

const customIcons: CustomIcons = {
  1: {
    label: 'Very Dissatisfied',
    icon: 'tabler-mood-sad'
  },
  2: {
    label: 'Neutral',
    icon: 'tabler-mood-empty'
  },
  3: {
    label: 'Satisfied',
    icon: 'tabler-mood-smile'
  },
  4: {
    label: 'Very Satisfied',
    icon: 'tabler-mood-happy'
  }
}

const IconContainer = (props: IconContainerProps) => {
  const { value } = props

  return (
    <span {...props}>
      <i className={customIcons[value].icon} />
    </span>
  )
}

const RatingsCustomized = () => {
  return (
    <>
      <div className='mbe-3'>
        <Typography className='font-medium'>Custom empty icon</Typography>
        <Rating name='customized-empty' defaultValue={2} precision={0.5} emptyIcon={<i className='tabler-star-filled' />} />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Custom icon and color</Typography>
        <Rating
          precision={0.5}
          defaultValue={3}
          name='customized-color'
          icon={<i className='tabler-heart-filled flex-shrink-0 text-error'/>}
          emptyIcon={<i className='tabler-heart-filled' />}
        />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>10 stars</Typography>
        <Rating name='customized-10' defaultValue={7} max={10} />
      </div>
      <>
        <Typography className='font-medium'>Custom icon set</Typography>
        <Rating name='customized-icons' defaultValue={2} max={4} IconContainerComponent={IconContainer} />
      </>
    </>
  )
}

export default RatingsCustomized
