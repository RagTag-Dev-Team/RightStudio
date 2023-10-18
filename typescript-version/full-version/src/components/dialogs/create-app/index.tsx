// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Avatar from '@mui/material/Avatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-Party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import Details from './Details'
import FrameWork from './FrameWork'
import Database from './Database'
import Billing from './Billing'
import Submit from './Submit'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'

// Style Imports
import styles from './styles.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'

type CreateAppProps = {
  open: boolean
  setOpen: (open: boolean) => void
  direction: Direction
}

type stepperProps = {
  icon: string
  title: string
  subtitle: string
  active?: boolean
}

const steps: stepperProps[] = [
  {
    icon: 'ri-file-list-2-line',
    title: 'Details',
    subtitle: 'Enter Details'
  },
  {
    icon: 'ri-box-3-line',
    title: 'FrameWorks',
    subtitle: 'Select Framework',
    active: true
  },
  {
    icon: 'ri-database-2-line',
    title: 'Database',
    subtitle: 'Select Database'
  },
  {
    icon: 'ri-bank-card-2-line',
    title: 'Billing',
    subtitle: 'Payment Details'
  },
  {
    icon: 'ri-check-line',
    title: 'Submit',
    subtitle: 'Submit'
  }
]

const renderStepCount = (
  activeStep: number,
  isLastStep: boolean,
  handleNext: () => void,
  handlePrev: () => void,
  direction: Direction
) => {
  switch (activeStep) {
    case 0:
      return (
        <Details
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastStep={isLastStep}
          direction={direction}
        />
      )
    case 1:
      return (
        <FrameWork
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastStep={isLastStep}
          direction={direction}
        />
      )
    case 2:
      return (
        <Database
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastStep={isLastStep}
          direction={direction}
        />
      )
    case 3:
      return (
        <Billing
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastStep={isLastStep}
          direction={direction}
        />
      )
    case 4:
      return (
        <Submit
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastStep={isLastStep}
          direction={direction}
        />
      )
    default:
      return null
  }
}

const CreateApp = ({ open, setOpen, direction }: CreateAppProps) => {
  // States
  const [activeStep, setActiveStep] = useState(0)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleClose = () => {
    setOpen(false)
    setActiveStep(0)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const isLastStep = activeStep === steps.length - 1

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    } else {
      handleClose()
    }
  }

  const handlePrev = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
      <DialogTitle
        variant='h5'
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Create App
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          Provide data with this form to create your app.
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('overflow-visible', globalDialogStyles.dialogContentWithActions, {
          [globalDialogStyles.smDialogContentWithActions]: isBelowSmScreen
        })}
      >
        <IconButton onClick={handleClose} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <div className={classnames('flex gap-y-6', { 'flex-col': isBelowMdScreen })}>
          <StepperWrapper>
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation='vertical'
              connector={<></>}
              className={classnames('flex flex-col gap-6', styles.stepperMinWidth)}
            >
              {steps.map((label, index) => {
                return (
                  <Step key={index} onClick={handleStep(index)}>
                    <StepLabel icon={<></>} className='p-0 cursor-pointer'>
                      <div className='step-label gap-4'>
                        <Avatar variant='rounded' className={classnames({ [styles.activeStep]: activeStep === index })}>
                          <i className={label.icon as string} />
                        </Avatar>
                        <div className='flex flex-col'>
                          <Typography variant='body2' className={styles.textPrimary}>
                            {label.title}
                          </Typography>
                          <Typography variant='caption'>{label.subtitle}</Typography>
                        </div>
                      </div>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </StepperWrapper>
          <div className='flex-1'>{renderStepCount(activeStep, isLastStep, handleNext, handlePrev, direction)}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateApp
