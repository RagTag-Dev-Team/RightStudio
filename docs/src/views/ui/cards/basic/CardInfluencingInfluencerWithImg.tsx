// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img1 from '../../../../../docs/assets/images/cards/1.png'

const CardInfluencingInfluencerWithImg = () => {
  return (
    <Card>
      <CardMedia image={img1} className='bs-[200px]' />
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
