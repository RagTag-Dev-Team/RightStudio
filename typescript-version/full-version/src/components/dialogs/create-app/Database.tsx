// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
  direction: Direction
}

const DataBase = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  // States
  const [value, setValue] = useState<string>('firebase')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <TextField
        fullWidth
        label='Database Name'
        placeholder={`${themeConfig.templateName.toLowerCase().replace(/\s+/g, '_')}_database`}
      />
      <div className='flex flex-col gap-4'>
        <Typography variant='h6'>Select Database Engine</Typography>
        <div onClick={() => setValue('firebase')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/firebase.png' alt='firebase' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Firebase</Typography>
              <Typography variant='caption'>Cloud Firestore</Typography>
            </div>
          </div>
          <Radio value='firebase' onChange={handleChange} checked={value === 'firebase'} />
        </div>
        <div onClick={() => setValue('aws')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <img src='/images/logos/aws.png' alt='aws' height={30} width={30} />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>AWS</Typography>
              <Typography variant='caption'>Amazon Fast NoSQL Database</Typography>
            </div>
          </div>
          <Radio value='aws' onChange={handleChange} checked={value === 'aws'} />
        </div>
        <div onClick={() => setValue('sql')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <i className='ri-database-2-line text-3xl' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>MySQL</Typography>
              <Typography variant='caption'>Basic MySQL database</Typography>
            </div>
          </div>
          <Radio value='sql' onChange={handleChange} checked={value === 'sql'} />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={<i className={direction === 'rtl' ? 'ri-arrow-right-line' : 'ri-arrow-left-line'} />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            <i
              className={
                isLastStep ? 'ri-check-line' : direction === 'rtl' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'
              }
            />
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default DataBase
