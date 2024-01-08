'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepAccountDetails from './StepAccountDetails'
import StepPersonalInfo from './StepPersonalInfo'
import StepBillingDetails from './StepBillingDetails'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

const steps = [
  {
    title: 'Account',
    subtitle: 'Account Details'
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information'
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void, direction: Direction) => {
  switch (step) {
    case 0:
      return <StepAccountDetails handleNext={handleNext} direction={direction} />
    case 1:
      return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} direction={direction} />
    case 2:
      return <StepBillingDetails handlePrev={handlePrev} direction={direction} />

    default:
      return null
  }
}

const RegisterMultiSteps = ({ direction }: { direction: Direction }) => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className='flex h-full justify-between items-center'>
      <div className='flex h-full items-center justify-center w-full max-is-[480px]'>image</div>
      <div className='flex justify-center items-center h-full w-full'>
        <StepperWrapper className='is-[700px]'>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
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
          {getStepContent(activeStep, handleNext, handlePrev, direction)}
        </StepperWrapper>
      </div>
    </div>
  )
}

export default RegisterMultiSteps
