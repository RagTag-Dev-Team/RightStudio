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
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import BillingCard from '@components/dialogs/billing-card'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Styles Imports
import commonStyles from '@/styles/common.module.css'

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
  const [creditCard, setCreditCard] = useState(0)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleAddCard = () => {
    setCreditCard(-1)
  }

  const handleClickOpen = (index: number) => {
    setCreditCard(index)
  }

  const addButtonProps: ButtonProps = {
    variant: 'contained',
    children: 'Add Card',
    size: 'small',
    startIcon: <i className='ri-add-line' />,
    onClick: handleAddCard
  }

  const editButtonProps = (index: number): ButtonProps => ({
    variant: 'outlined',
    children: 'Edit',
    size: 'small',
    onClick: () => handleClickOpen(index)
  })

  return (
    <>
      <Card>
        <CardHeader
          title='Payment Methods'
          action={<OpenDialogOnElementClick element={Button} elementProps={addButtonProps} dialog={BillingCard} />}
        />
        <CardContent className='flex flex-col'>
          {data.map((item, index) => (
            <div
              key={index}
              className={classnames(
                'flex justify-between items-center',
                commonStyles.border,
                commonStyles.borderRadius,
                {
                  'flex-col !items-start': isBelowSmScreen
                }
              )}
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
                  <OpenDialogOnElementClick
                    element={Button}
                    elementProps={editButtonProps(index)}
                    dialog={BillingCard}
                    dialogProps={{ data: data[creditCard] }}
                  />
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
    </>
  )
}

export default PaymentMethod
