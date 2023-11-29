// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Style Imports
import styles from './styles.module.css'

const CardInfluencingInfluencerWithImg = () => {
  return (
    <Card>
      <CardMedia image='/images/cards/1.png' className={styles.influenceBgImg} />
      <CardContent>
        <Typography variant='h5' className='mbe-2'>
          Influencing The Influencer
        </Typography>
        <Typography color='text.secondary'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfluencingInfluencerWithImg
