// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
  direction: Direction
}

const FrameWork = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  // States
  const [value, setValue] = useState<string>('react')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <Typography>Select Framework</Typography>
        <div onClick={() => setValue('react')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/react.png' alt='react' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>React Native</Typography>
              <Typography variant='caption'>Create truly native apps</Typography>
            </div>
          </div>
          <Radio value='react' onChange={handleChange} checked={value === 'react'} />
        </div>

        <div onClick={() => setValue('angular')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/angular.png' alt='angular' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Angular</Typography>
              <Typography variant='caption'>Most suited for your application</Typography>
            </div>
          </div>
          <Radio value='angular' onChange={handleChange} checked={value === 'angular'} />
        </div>
        <div onClick={() => setValue('vuejs')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/vue.png' alt='vue' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Vue</Typography>
              <Typography variant='caption'>Progressive Framework</Typography>
            </div>
          </div>
          <Radio value='vuejs' onChange={handleChange} checked={value === 'vuejs'} />
        </div>
        <div onClick={() => setValue('laravel')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/laravel.png' alt='laravel' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Laravel</Typography>
              <Typography variant='caption'>PHP web frameworks</Typography>
            </div>
          </div>
          <Radio value='laravel' onChange={handleChange} checked={value === 'laravel'} />
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

export default FrameWork
