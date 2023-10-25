// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import CardContent from '@mui/material/CardContent'
import type { Theme } from '@mui/material/styles'
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { CustomInputHorizontalData, CustomInputVerticalData } from '@core/components/custom-inputs/types'

// Component Imports
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

// Style Imports
import commonStyles from '@/styles/common.module.css'
import AddEditAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const data: CustomInputHorizontalData[] = [
  {
    title: 'John Doe (Default)',
    meta: <Chip size='small' label='Home' color='primary' />,
    value: 'home',
    isSelected: true,
    content: (
      <div className='flex flex-col h-full'>
        <Typography>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider />
        <div className='flex items-center'>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} className={commonStyles.primary}>
            Edit
          </Typography>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} className={commonStyles.primary}>
            Remove
          </Typography>
        </div>
      </div>
    )
  },
  {
    title: 'ACME Inc.',
    meta: <Chip size='small' label='Office' color='success' />,
    value: 'office',
    content: (
      <div className='flex flex-col h-full'>
        <Typography>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider />
        <div className='flex items-center'>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} className={commonStyles.primary}>
            Edit
          </Typography>
          <Typography href='/' component={Link} onClick={e => e.preventDefault()} className={commonStyles.primary}>
            Remove
          </Typography>
        </div>
      </div>
    )
  }
]

const dataIcons: CustomInputVerticalData[] = [
  {
    isSelected: true,
    value: 'standard',
    title: 'Standard',
    asset: 'ri-user-3-line',
    content: (
      <>
        <Chip size='small' label='Free' color='success' className='absolute inline-end-0' />
        <Typography variant='body2' className='text-center my-auto'>
          Get your product in 1 Week.
        </Typography>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    asset: 'ri-vip-crown-line',
    content: (
      <>
        <Chip label='$10' size='small' color='secondary' className='absolute inline-end-0' />
        <Typography variant='body2' className='text-center my-auto'>
          Get your product in 3-4 days.
        </Typography>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    asset: 'ri-rocket-2-line',
    content: (
      <>
        <Chip label='$15' size='small' color='secondary' className='absolute inline-end-0' />
        <Typography variant='body2' className='text-center my-auto'>
          Get your product in 1 day.
        </Typography>
      </>
    )
  }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {
  const initialSelectedOption: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // States
  const [selectedOption, setSelectedOption] = useState<string>(initialSelectedOption)
  const [selectedSpeed, setSelectedSpeed] = useState<string>('standard')

  // Hooks
  const isBetweenSmAndLg = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg'))

  const buttonProps: ButtonProps = {
    variant: 'outlined',
    children: 'Add New Address'
  }

  const handleOptionChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedOption(prop)
    } else {
      setSelectedOption((prop.target as HTMLInputElement).value)
    }
  }

  const handleSpeedChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedSpeed(prop)
    } else {
      setSelectedSpeed((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} lg={8}>
        <div className='flex flex-col items-start gap-4'>
          <Typography>Select your preferable address</Typography>
          <Grid container>
            {data.map((item, index) => (
              <CustomInputHorizontal
                type='radio'
                key={index}
                data={item}
                gridProps={{ sm: 6, xs: 12 }}
                selected={selectedOption}
                name='custom-radios-basic'
                handleChange={handleOptionChange}
              />
            ))}
          </Grid>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddEditAddress} />
        </div>
        <div className='flex flex-col items-start gap-4'>
          <Typography>Choose Delivery Speed</Typography>
          <Grid container>
            {dataIcons.map((item, index) => {
              let asset

              if (item.asset && typeof item.asset === 'string') {
                asset = <i className={item.asset} />
              }

              return (
                <CustomInputVertical
                  type='radio'
                  key={index}
                  gridProps={{ sm: 4, xs: 12 }}
                  selected={selectedSpeed}
                  name='custom-radios-basic'
                  handleChange={handleSpeedChange}
                  data={typeof item.asset === 'string' ? { ...item, asset } : item}
                />
              )
            })}
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} lg={4}>
        <div className={classnames(commonStyles.border, commonStyles.borderRadius)}>
          <CardContent>
            <Typography className='font-medium'>Estimated Delivery Date</Typography>
            <div className='flex gap-2'>
              <img width={60} height={60} src='/images/pages/google-home.png' alt='Google Home' />
              <div>
                <Typography>Google - Google Home - White</Typography>
                <Typography>18th Nov 2021</Typography>
              </div>
            </div>
            <div className='flex gap-2'>
              <img width={60} height={60} src='/images/pages/iPhone-11.png' alt='iphone 11' />
              <div>
                <Typography>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography>20th Nov 2021</Typography>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography className='font-medium'>Price Details</Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center flex-wrap'>
                <Typography>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex justify-between flex-wrap'>
                <Typography>Delivery Charges</Typography>
                <div className='flex gap-2'>
                  <Typography variant='body2' className='line-through'>
                    $5.00
                  </Typography>
                  <Chip size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex items-center justify-between flex-wrap'>
            <Typography className='font-medium'>Total</Typography>
            <Typography className='font-medium'>$1198.00</Typography>
          </CardContent>
        </div>
        <div className='flex justify-end'>
          <Button fullWidth={!isBetweenSmAndLg} variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepAddress
