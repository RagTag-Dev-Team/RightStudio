// React Imports
import React from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import type { IconContainerProps } from '@mui/material/Rating'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

type CustomIcons = {
  [index: string]: { icon: string; label: string }
}

const customIcons: CustomIcons = {
  1: {
    label: 'Very Dissatisfied',
    icon: 'ri-emotion-unhappy-line'
  },
  2: {
    label: 'Neutral',
    icon: 'ri-emotion-normal-line'
  },
  3: {
    label: 'Satisfied',
    icon: 'ri-emotion-happy-line'
  },
  4: {
    label: 'Very Satisfied',
    icon: 'ri-emotion-line'
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
        <Rating name='customized-empty' defaultValue={2} precision={0.5} emptyIcon={<i className='ri-star-fill' />} />
      </div>
      <div className='mbe-3'>
        <Typography className='font-medium'>Custom icon and color</Typography>
        <Rating
          precision={0.5}
          defaultValue={3}
          name='customized-color'
          icon={<i className={classnames('ri-heart-fill flex-shrink-0', styles.errorIconColor)}/>}
          emptyIcon={<i className='ri-heart-fill' />}
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
