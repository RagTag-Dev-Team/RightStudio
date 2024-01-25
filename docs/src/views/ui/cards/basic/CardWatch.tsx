// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img5 from "../../../../../docs/assets/images/cards/5.png";

const CardWatch = () => {
  return (
    <Card>
      <CardMedia image={img5} className='bs-[140px]' />
      <CardContent>
        <Typography variant='h5' className='mbe-2'>
          Apple Watch
        </Typography>
        <Typography className='mbe-2'>$249.40</Typography>
        <Typography color='text.secondary'>
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography>
      </CardContent>
      <Button variant='contained' fullWidth className='rounded-none'>
        Add to Cart
      </Button>
    </Card>
  )
}

export default CardWatch
