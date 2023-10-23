// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const CardLinkedIn = () => {
  return (
    <Card className={classnames(styles.solidCard, styles.linkedInCard)}>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className={classnames('ri-linkedin-fill text-3xl', styles.text)} />
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
            <i className={classnames('ri-thumb-up-fill text-3xl', styles.text)} />
            <Typography variant='body2' className={styles.text}>
              1.2k
            </Typography>
            <i className={classnames('ri-share-line text-3xl', styles.text)} />
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
