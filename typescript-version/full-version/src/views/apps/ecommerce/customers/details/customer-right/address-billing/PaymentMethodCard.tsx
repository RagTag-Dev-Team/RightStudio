// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import type { IconButtonProps } from '@mui/material/IconButton'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import AddNewCard from '@components/dialogs/billing-card'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

type dataType = {
  typeOfCard: string
  isDefaultCard: boolean
  expiryDate: string
}

const data: dataType[] = [
  {
    typeOfCard: 'Mastercard',
    isDefaultCard: true,
    expiryDate: 'Apr 2028'
  },
  {
    typeOfCard: 'American Express',
    isDefaultCard: false,
    expiryDate: 'Jan 2025'
  },
  {
    typeOfCard: 'Visa',
    isDefaultCard: false,
    expiryDate: 'Nov 2030'
  }
]

// Vars
const editCardData = {
  cardNumber: '**** **** **** 4487',
  name: 'Violet Mendoza ',
  expiryDate: '04/2028',
  cardCvv: '233'
}

const CustomerAddress = (props: dataType) => {
  // Props
  const { typeOfCard, isDefaultCard, expiryDate } = props

  // States
  const [expanded, setExpanded] = useState(isDefaultCard ? true : false)

  // Vars
  const iconButtonProps: IconButtonProps = {
    children: <i className='ri-edit-box-line' />,
    size: 'large'
  }

  // Hooks
  const theme = useTheme()

  const mastercard = '/images/apps/ecommerce/mastercard.png'
  const americanExpress = '/images/apps/ecommerce/american-express.png'
  const visa = '/images/apps/ecommerce/visa.png'

  return (
    <>
      <div className='flex justify-between items-center mlb-3'>
        <div className='flex items-center gap-2'>
          <IconButton
            sx={{
              '& i': {
                transition: 'transform 0.3s',
                transform: expanded ? 'rotate(0deg)' : theme.direction === 'ltr' ? 'rotate(-90deg)' : 'rotate(90deg)'
              }
            }}
            onClick={() => setExpanded(!expanded)}
          >
            <i className='ri-arrow-down-s-line' />
          </IconButton>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-[#F6F8FA] rounded-sm is-[50px] bs-[30px]'>
              <img
                src={
                  typeOfCard === 'Mastercard' ? mastercard : typeOfCard === 'American Express' ? americanExpress : visa
                }
                alt={typeOfCard}
                height={typeOfCard === 'Mastercard' ? 19 : typeOfCard === 'American Express' ? 16 : 12}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <Typography color='text.primary' className='font-medium'>
                  {typeOfCard}
                </Typography>
                {isDefaultCard && <Chip variant='tonal' color='success' label='Default Card' size='small' />}
              </div>
              <Typography>Expires {expiryDate}</Typography>
            </div>
          </div>
        </div>
        <div>
          <OpenDialogOnElementClick
            element={IconButton}
            elementProps={iconButtonProps}
            dialog={AddNewCard}
            dialogProps={{ data: editCardData }}
          />
          <IconButton size='large'>
            <i className='ri-delete-bin-7-line' />
          </IconButton>
          <OptionMenu iconButtonProps={{ size: 'large' }} options={['Set as Default Address']} />
        </div>
      </div>
      <Collapse in={expanded} timeout={300}>
        <Grid container spacing={6} className='pbe-3 pis-12'>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={4}>
                <div className='flex flex-col gap-1'>
                  <Typography>Name</Typography>
                  <Typography>Number</Typography>
                  <Typography>Expires</Typography>
                  <Typography>Type</Typography>
                  <Typography>Issuer</Typography>
                  <Typography>ID</Typography>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className='flex flex-col gap-1'>
                  <Typography>Violet Mendoza</Typography>
                  <Typography>**** 4487</Typography>
                  <Typography>08/2028</Typography>
                  <Typography>{typeOfCard}</Typography>
                  <Typography>VICBANK</Typography>
                  <Typography>DH73DJ8</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={4}>
                <div className='flex flex-col gap-1'>
                  <Typography>Billing</Typography>
                  <Typography>Number</Typography>
                  <Typography>Email</Typography>
                  <Typography>Origin</Typography>
                  <Typography>CVC</Typography>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className='flex flex-col gap-1'>
                  <Typography>USA</Typography>
                  <Typography>+7634 983 637</Typography>
                  <Typography>vafgot@vultukir.org</Typography>
                  <Typography>United States</Typography>
                  <Typography>Passed</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
    </>
  )
}

const PaymentMethod = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'outlined',
    children: 'New payment Methods',
    size: 'small'
  }

  return (
    <Card>
      <CardHeader
        title='Payment Methods'
        action={<OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddNewCard} />}
      />
      <CardContent>
        {data.map((address, index) => (
          <div key={index}>
            <CustomerAddress {...address} />
            {index !== data.length - 1 && <Divider />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PaymentMethod
