// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const CardFacebook = () => {
  return (
    <Card className={classnames(styles.solidCard, styles.facebookCard)}>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className={classnames('ri-facebook-fill text-3xl', styles.text)} />
          <Typography variant='h5' className={styles.text}>
            Facebook Card
          </Typography>
        </div>
        <Typography className={classnames('mbe-4', styles.text)}>
          You&#39;ve read about the importance of being courageous, rebellious and imaginative. These are all vital
          ingredients in an effective.
        </Typography>
        <div className='flex align-center justify-between flex-wrap gap-x-4 gap-y-2'>
          <div className={classnames('flex items-center', styles.solidCardUserGap)}>
            <Avatar src='/images/avatars/1.png' />
            <Typography className={styles.text}>
              Eugene Clarke
            </Typography>
          </div>
          <div className={classnames('flex items-center', styles.solidCardActionsGap)}>
            <i className={classnames('ri-thumb-up-fill text-xl', styles.text)} />
            <Typography variant='body2' className={styles.text}>
              2.5k
            </Typography>
            <i className={classnames('ri-share-line text-xl', styles.text)} />
            <Typography variant='body2' className={styles.text}>
              124
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardFacebook
