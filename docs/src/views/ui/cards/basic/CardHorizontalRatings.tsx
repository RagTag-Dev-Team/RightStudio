// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const Img = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const CardHorizontalRatings = () => {
  // Hooks
  const mdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h6' className='mbe-2'>
              Stumptown Roasters
            </Typography>
            <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2'>
              <Rating name='read-only' value={4} readOnly />
              <Typography>4 Star | 98 reviews</Typography>
            </div>
            <Typography variant='body2'>
              Before there was a United States of America, there were coffee houses, because how are you supposed to
              build.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className={classnames('flex items-center justify-center', { [styles.horRatingsGridOrder]: mdScreen })}
        >
          <CardContent className='flex items-center justify-center'>
            <Img src='/images/cards/4.png' height={175} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
