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

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import StepDealType from './StepDealType'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

// style Imports
import styles from './styles.module.css'
import StepDealDetails from './StepDealDetails'
import StepDealUsage from './StepDealUsage'
import StepReview from './StepReview'

const steps = [
  {
    title: 'Deal Type',
    subtitle: 'Choose type of deal'
  },
  {
    title: 'Deal Details',
    subtitle: 'Provide deal details'
  },
  {
    title: 'Deal Usage',
    subtitle: 'Limitations & Offers'
  },
  {
    subtitle: 'Launch a deal',
    title: 'Review & Complete'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void, direction: Direction) => {
  switch (step) {
    case 0:
      return (
        <StepDealType
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 1:
      return (
        <StepDealDetails
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 2:
      return (
        <StepDealUsage
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 3:
      return (
        <StepReview
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    default:
      return null
  }
}

const CreateDeal = ({ direction }: { direction: Direction }) => {
  // States
  const [activeStep, setActiveStep] = useState(0)

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

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
    <Card className={classnames('flex', { 'flex-col': isBelowMdScreen })}>
      <CardContent
        className={classnames({ [styles.topCardContent]: isBelowMdScreen, [styles.leftCardContent]: !isBelowMdScreen })}
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
        <DatePickerWrapper>{getStepContent(activeStep, handleNext, handlePrev, direction)}</DatePickerWrapper>
      </CardContent>
    </Card>
  )
}

export default CreateDeal
