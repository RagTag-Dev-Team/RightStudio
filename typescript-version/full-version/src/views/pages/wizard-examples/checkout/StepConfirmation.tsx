// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'

// Vars
const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: true,
    price: 899,
    originalPrice: 999
  }
]

const StepConfirmation = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className='flex items-center flex-col text-center gap-4'>
          <Typography>Thank You! 😇</Typography>
          <Typography>Your order #1536548131 has been placed!</Typography>
          <div>
            <Typography>We sent an email to john.doe@example.com with your order confirmation and receipt.</Typography>
            <Typography>
              If the email hasn&#39;t arrived within two minutes, please check your spam folder to see if the email was
              routed there.
            </Typography>
          </div>
          <div className='flex items-center'>
            <i className='ri-time-line text-xl' />
            <Typography>Time placed: 25/05/2020 13:35pm</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='flex flex-col md:flex-row border rounded'>
          <div className='flex flex-col w-full items-center sm:items-start [&:not(:last-child)]:border-be md:[&:not(:last-child)]:border-ie'>
            <div className='flex items-center'>
              <i className='ri-map-pin-2-line' />
              <Typography className='font-medium'>Shipping</Typography>
            </div>
            <Typography>John Doe</Typography>
            <Typography>4135 Parkway Street,</Typography>
            <Typography>Los Angeles, CA 90017,</Typography>
            <Typography>USA</Typography>
            <Typography>+123456789</Typography>
          </div>
          <div className='flex flex-col w-full items-center sm:items-start [&:not(:last-child)]:border-be md:[&:not(:last-child)]:border-ie'>
            <div className='flex items-center'>
              <i className='ri-bank-card-2-line' />
              <Typography className='font-medium'>Billing Address</Typography>
            </div>
            <Typography>John Doe</Typography>
            <Typography>4135 Parkway Street,</Typography>
            <Typography>Los Angeles, CA 90017,</Typography>
            <Typography>USA</Typography>
            <Typography>+123456789</Typography>
          </div>
          <div className='flex flex-col w-full items-center sm:items-start'>
            <div className='flex items-center'>
              <i className='ri-archive-line' />
              <Typography className='font-medium'>Shipping Method</Typography>
            </div>
            <Typography>Preferred Method:</Typography>
            <Typography>Standard Delivery</Typography>
            <Typography>(Normally 3-4 business days)</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={8} xl={9}>
        <div className='border rounded'>
          {products.map((product, index) => (
            <div key={index} className='flex flex-col sm:flex-row items-center [&:not(:last-child)]:border-be'>
              <img height={80} width={80} src={product.imgSrc} alt={product.imgAlt} />
              <div className='flex justify-between w-full flex-col sm:flex-row items-center sm:items-start'>
                <div className='flex flex-col items-center sm:items-start'>
                  <Typography>{product.productName}</Typography>
                  <div className='flex items-center'>
                    <Typography>Sold By:</Typography>
                    <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                      {product.soldBy}
                    </Typography>
                    {product.inStock && <Chip size='small' color='success' label='In Stock' />}
                  </div>
                </div>
                <div className='flex items-center'>
                  <Typography color='primary'>{`$${product.price}`}</Typography>
                  <Typography className='line-through'>{`/$${product.originalPrice}`}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <div className='border rounded'>
          <CardContent className='flex gap-4 flex-col'>
            <Typography className='font-medium'>Price Details</Typography>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between gap-2'>
                <Typography>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <Typography>Delivery Charges</Typography>
                <div className='flex'>
                  <Typography className='line-through'>$5.00</Typography>
                  <Chip size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='font-medium'>Total</Typography>
              <Typography className='font-medium'>$1198.00</Typography>
            </div>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepConfirmation
