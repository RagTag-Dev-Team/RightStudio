// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Data
const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    rating: 4,
    count: 1,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: true,
    rating: 4,
    count: 1,
    price: 899,
    originalPrice: 999
  }
]

const StepCart = ({ handleNext }: { handleNext: () => void }) => {
  // States
  const [openCollapse, setOpenCollapse] = useState<boolean>(true)
  const [openFade, setOpenFade] = useState<boolean>(true)

  useEffect(() => {
    if (!openFade) {
      setTimeout(() => {
        setOpenCollapse(false)
      }, 300)
    }
  }, [openFade])

  return (
    <Grid container>
      <Grid item xs={12} lg={8}>
        <Collapse in={openCollapse}>
          <Fade in={openFade} timeout={{ exit: 300 }}>
            <Alert
              icon={<i className='ri-percent-line' />}
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpenFade(false)
                  }}
                >
                  <i className='ri-close-line' />
                </IconButton>
              }
            >
              <AlertTitle>Available Offers</AlertTitle>
              <Typography>- 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards</Typography>
              <Typography>- 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA</Typography>
            </Alert>
          </Fade>
        </Collapse>
        <Typography>My Shopping Bag (2 Items)</Typography>
        <div className='border rounded'>
          {products.map((product, index) => (
            <div key={index} className='flex flex-col sm:flex-row items-center relative [&:not(:last-child)]:border-be'>
              <img height={140} width={140} src={product.imgSrc} alt={product.imgAlt} />
              <IconButton size='small' className='absolute block-start-2 inline-end-2'>
                <i className='ri-close-line text-xl' />
              </IconButton>
              <div className='flex flex-col sm:flex-row items-center sm:justify-between w-full'>
                <div className='flex flex-col items-center sm:items-start'>
                  <Typography>{product.productName}</Typography>
                  <div className='flex items-center'>
                    <Typography>Sold By:</Typography>
                    <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                      {product.soldBy}
                    </Typography>
                    {product.inStock ? (
                      <Chip size='small' color='success' label='In Stock' />
                    ) : (
                      <Chip size='small' color='error' label='Out of Stock' />
                    )}
                  </div>
                  <Rating name='google-nest-rating' value={product.rating} readOnly />
                  <TextField size='small' type='number' defaultValue={product.count} className='block max-is-[100px]' />
                </div>
                <div className='flex flex-col justify-between items-center sm:items-end'>
                  <div className='flex'>
                    <Typography color='primary'>{`$${product.price}`}</Typography>
                    <Typography className='line-through'>{`/$${product.originalPrice}`}</Typography>
                  </div>
                  <Button variant='outlined' size='small'>
                    Move to wishlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Typography
          href='/'
          component={Link}
          onClick={e => e.preventDefault()}
          className='flex items-center justify-between gap-4 border rounded'
          color='primary'
        >
          Add more products from wishlist
          <DirectionalIcon ltrIconClass='ri-arrow-right-s-line' rtlIconClass='ri-arrow-left-s-line' />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <div className='border rounded'>
          <CardContent>
            <Typography className='font-medium'>Offer</Typography>
            <div className='flex gap-4'>
              <TextField fullWidth size='small' placeholder='Enter Promo Code' />
              <Button variant='outlined' className='normal-case'>
                Apply
              </Button>
            </div>
            <div className='rounded bg-actionHover'>
              <Typography className='font-medium'>Buying gift for a loved one?</Typography>
              <Typography>Gift wrap and personalized message on card, Only for $2.</Typography>
              <Typography
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                color='primary'
                className='font-medium'
              >
                Add a gift wrap
              </Typography>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex gap-4 flex-col'>
            <Typography className='font-medium'>Price Details</Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography>Bag Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography>Coup Discount</Typography>
                <Typography
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  className='font-medium'
                  color='primary'
                >
                  Apply Coupon
                </Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography>Delivery Charges</Typography>
                <div className='flex items-center'>
                  <Typography className='line-through'>$5.00</Typography>
                  <Chip size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <div className='flex items-center flex-wrap justify-between'>
              <Typography className='font-medium'>Total</Typography>
              <Typography className='font-medium'>$1198.00</Typography>
            </div>
          </CardContent>
        </div>
        <div className='flex justify-normal sm:justify-end xl:justify-normal'>
          <Button className='is-full sm:is-auto lg:is-full' variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepCart
