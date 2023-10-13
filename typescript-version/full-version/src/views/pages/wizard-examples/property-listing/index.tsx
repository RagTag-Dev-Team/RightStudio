'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import StepPersonalDetails from './StepPersonalDetails'
import StepPropertyDetails from './StepPropertyDetails'
import StepPropertyFeatures from './StepPropertyFeatures'
import StepPropertyArea from './StepPropertyArea'
import StepPriceDetails from './StepPriceDetails'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

// Style Imports
import styles from './styles.module.css'

const steps = [
  {
    title: 'Personal Details',
    subtitle: 'Your Name/Email'
  },
  {
    title: 'Property Details',
    subtitle: 'Property Type'
  },
  {
    title: 'Property Features',
    subtitle: 'Bedrooms/Floor No'
  },
  {
    title: 'Property Area',
    subtitle: 'Covered Area'
  },
  {
    title: 'Price Details',
    subtitle: 'Expected Price'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
  switch (step) {
    case 0:
      return <StepPersonalDetails activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
    case 1:
      return <StepPropertyDetails activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
    case 2:
      return <StepPropertyFeatures activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
    case 3:
      return <StepPropertyArea activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
    case 4:
      return <StepPriceDetails activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
    default:
      return null
  }
}

const PropertyListingWizard = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const handleNext = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1)
    } else {
      alert('Submitted..!!')
    }
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <Card className={classnames('flex', { 'flex-col': isBelowLgScreen })}>
      <CardContent
        className={classnames({ [styles.topCardContent]: isBelowLgScreen, [styles.leftCardContent]: !isBelowLgScreen })}
      >
        <StepperWrapper className='h-full'>
          <Stepper activeStep={activeStep} connector={<></>} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label cursor-pointer'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <CardContent className='flex-1'>
        <DatePickerWrapper>{getStepContent(activeStep, handleNext, handlePrev)}</DatePickerWrapper>
      </CardContent>
    </Card>
  )
}

export default PropertyListingWizard
