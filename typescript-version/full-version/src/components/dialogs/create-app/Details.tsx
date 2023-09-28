// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
  direction: Direction
}

const Details = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  // States
  const [value, setValue] = useState<string>('crm')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <TextField fullWidth label='Application Name' placeholder={`${themeConfig.templateName}`} />
      <div className='flex flex-col gap-4'>
        <Typography>Category</Typography>
        <div onClick={() => setValue('crm')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <Icon icon='mdi:briefcase-outline' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>CRM Application</Typography>
              <Typography variant='caption'>Scales with any business</Typography>
            </div>
          </div>
          <Radio value='crm' onChange={handleChange} checked={value === 'crm'} />
        </div>
        <div onClick={() => setValue('eCommerce')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <Icon icon='mdi:cart-outline' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>eCommerce Platforms</Typography>
              <Typography variant='caption'>Grow Your Business With App</Typography>
            </div>
          </div>
          <Radio value='eCommerce' onChange={handleChange} checked={value === 'eCommerce'} />
        </div>
        <div onClick={() => setValue('learning')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <Icon icon='mdi:license' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Online Learning platform</Typography>
              <Typography variant='caption'>Start learning today</Typography>
            </div>
          </div>
          <Radio value='learning' onChange={handleChange} checked={value === 'learning'} />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={<Icon icon={direction === 'rtl' ? 'mdi:arrow-right' : 'mdi:arrow-left'} />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            <Icon icon={isLastStep ? 'mdi:check' : direction === 'rtl' ? 'mdi:arrow-left' : 'mdi:arrow-right'} />
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Details
