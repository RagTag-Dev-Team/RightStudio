'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import BillingCard from '@components/dialogs/billing-card'

// Styles Imports
import styles from './styles.module.css'

type DataType = {
  name: string
  imgSrc: string
  imgAlt: string
  cardCvv: string
  expiryDate: string
  cardNumber: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

const data: DataType[] = [
  {
    cardCvv: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvv: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  },
  {
    cardCvv: '3845',
    expiryDate: '08/20',
    badgeColor: 'error',
    cardStatus: 'Expired',
    name: 'Lester Jennings',
    imgAlt: 'American Express card',
    cardNumber: '3700 000000 00002',
    imgSrc: '/images/logos/american-express.png'
  }
]

const PaymentMethod = () => {
  // States
  const [open, setOpen] = useState(false)
  const [creditCard, setCreditCard] = useState(0)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleAddCard = () => {
    setCreditCard(-1)
    setOpen(true)
  }

  const handleClickOpen = (index: number) => {
    setOpen(true)
    setCreditCard(index)
  }

  return (
    <>
      <Card>
        <CardHeader
          title='Payment Methods'
          action={
            <Button
              variant='contained'
              color='primary'
              onClick={handleAddCard}
              startIcon={<i className='ri-add-line' />}
              size='small'
            >
              Add Card
            </Button>
          }
        />
        <CardContent className='flex flex-col'>
          {data.map((item, index) => (
            <div
              key={index}
              className={classnames('flex justify-between items-center', styles.border, {
                'flex-col !items-start': isBelowSmScreen
              })}
            >
              <div className='flex flex-col items-start'>
                <img src={item.imgSrc} alt={item.imgAlt} />
                <div className='flex items-center'>
                  <Typography>{item.name}</Typography>
                  {item.cardStatus ? <Chip color={item.badgeColor} label={item.cardStatus} size='small' /> : null}
                </div>
                <Typography>
                  {item.cardNumber && item.cardNumber.slice(0, -4).replace(/[0-9]/g, '*') + item.cardNumber.slice(-4)}
                </Typography>
              </div>
              <div className='flex flex-col'>
                <div className='flex'>
                  <Button variant='outlined' onClick={() => handleClickOpen(index)} size='small'>
                    Edit
                  </Button>
                  <Button variant='outlined' color='secondary' size='small'>
                    Delete
                  </Button>
                </div>
                <Typography>Card expires at {item.expiryDate}</Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <BillingCard open={open} setOpen={setOpen} data={data[creditCard]} />
    </>
  )
}

export default PaymentMethod
