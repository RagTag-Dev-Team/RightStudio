// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardSupport = () => {
  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center'>
        <Avatar className={classnames('mbe-2', styles.supportAvatar)}>
          <Icon icon='mdi:help-circle-outline' fontSize='2rem' />
        </Avatar>
        <Typography variant='h6' className='mbe-2'>
          Support
        </Typography>
        <Typography variant='body2' className='mbe-4'>
          According to us blisters are a very common thing and we come across them very often in our daily lives. It is
          a very common occurrence like cold or fever depending upon your lifestyle.
        </Typography>
        <Button variant='contained'>Contact Now</Button>
      </CardContent>
    </Card>
  )
}

export default CardSupport
