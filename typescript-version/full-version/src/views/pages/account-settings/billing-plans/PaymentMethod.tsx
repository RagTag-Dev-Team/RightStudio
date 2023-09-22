// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Custom Imports
import BillingCard from '@components/dialogs/billing-card'

// Styles Imports
import styles from './styles.module.css'

type DataType = {
  cardCvc?: string
  name?: string
  expiryDate?: string
  imgAlt?: string
  badgeColor?: ThemeColor
  cardStatus?: string
  cardNumber?: string
  imgSrc?: string
}

const data: DataType[] = [
  {
    cardCvc: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvc: '681',
    name: 'Mildred Wagner',
    expiryDate: '02/24',
    imgAlt: 'Visa card',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  }
]

const PaymentMethod = () => {
  // States
  const [open, setOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<string>('credit')
  const [cardData, setCardData] = useState({
    cardNumber: '',
    name: '',
    expiryDate: '',
    cardCvc: ''
  })

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleReset = () => {
    setCardData({
      cardNumber: '',
      name: '',
      expiryDate: '',
      cardCvc: ''
    })
  }

  return (
    <Card>
      <CardHeader title='Payment Method' />
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  name='payment-method-radio'
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel value='credit' control={<Radio />} label='Credit/Debit/ATM Card' />
                  <FormControlLabel value='cash' control={<Radio />} label='COD/Cheque' />
                </RadioGroup>
              </Grid>
              {paymentMethod === 'credit' ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='number'
                      autoComplete='off'
                      label='Card Number'
                      placeholder='0000 0000 0000 0000'
                      value={cardData.cardNumber}
                      onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      name='name'
                      label='Name'
                      autoComplete='off'
                      placeholder='John Doe'
                      value={cardData.name}
                      onChange={e => setCardData({ ...cardData, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      name='expiry'
                      autoComplete='off'
                      label='Expiry Date'
                      placeholder='MM/YY'
                      value={cardData.expiryDate}
                      onChange={e => setCardData({ ...cardData, expiryDate: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      name='cvv'
                      label='CVV Code'
                      autoComplete='off'
                      placeholder='123'
                      value={cardData.cardCvc}
                      onChange={e => setCardData({ ...cardData, cardCvc: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Switch defaultChecked />} label='Save Card for future billing?' />
                  </Grid>
                </>
              ) : (
                <>
                  <Typography>
                    Cash on delivery is a mode of payment where you make the payment after the goods/services are
                    received.
                  </Typography>
                  <Typography>
                    You can pay cash or make the payment via debit/credit card directly to the delivery person.
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>My Cards</Typography>
            {data.map((item: DataType, index: number) => (
              <div
                key={index}
                className={classnames(styles.paymentCard, 'flex justify-between', {
                  'flex-col items-start': isBelowSmScreen
                })}
              >
                <div className='flex flex-col items-start gap-2.5'>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                  <div className='flex items-center'>
                    <Typography>{item.name}</Typography>
                    {item.cardStatus ? <Chip color={item.badgeColor} label={item.cardStatus} size='small' /> : null}
                  </div>
                  <Typography>
                    {item.cardNumber && item.cardNumber.slice(0, -4).replace(/[0-9]/g, '*') + item.cardNumber.slice(-4)}
                  </Typography>
                </div>
                <div className=''>
                  <Button variant='outlined' onClick={handleClickOpen}>
                    Edit
                  </Button>
                  <Button variant='outlined' color='secondary'>
                    Delete
                  </Button>
                  <Typography>Card expires at {item.expiryDate}</Typography>
                </div>
              </div>
            ))}
            <BillingCard open={open} setOpen={setOpen} />
          </Grid>

          <Grid item xs={12} className='flex gap-4 flex-wrap'>
            <Button type='submit' variant='contained'>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PaymentMethod
