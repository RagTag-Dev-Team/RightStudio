// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardLinkedIn = () => {
  return (
    <Card className={classnames(styles.solidCard, styles.linkedInCard)}>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <Icon icon='mdi:linkedin' fontSize='1.875rem' className={styles.text} />
          <Typography variant='h6' className={styles.text}>
            LinkedIn Card
          </Typography>
        </div>
        <Typography variant='body2' className={classnames('mbe-4', styles.text)}>
          With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is
          directed.
        </Typography>
        <div className='flex align-center justify-between flex-wrap gap-x-4 gap-y-2'>
          <div className={classnames('flex items-center', styles.solidCardUserGap)}>
            <Avatar src='/images/avatars/8.png' />
            <Typography variant='body2' className={styles.text}>
              Anne Burke
            </Typography>
          </div>
          <div className={classnames('flex items-center', styles.solidCardActionsGap)}>
            <Icon icon='mdi:thumb-up' fontSize='1.25rem' className={styles.text} />
            <Typography variant='body2' className={styles.text}>
              1.2k
            </Typography>
            <Icon icon='mdi:share-variant' fontSize='1.25rem' className={styles.text} />
            <Typography variant='body2' className={styles.text}>
              56
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardLinkedIn
