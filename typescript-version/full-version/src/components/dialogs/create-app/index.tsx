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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Component Imports
import Details from './Details'
import FrameWork from './FrameWork'
import Database from './Database'
import Billing from './Billing'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'

// Style Imports
import styles from './styles.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'
import Submit from './Submit'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

type stepperProps = {
  icon: string
  title: string
  subtitle: string
  active?: boolean
}

const steps: stepperProps[] = [
  {
    icon: 'mdi:file-document-outline',
    title: 'Details',
    subtitle: 'Enter Details'
  },
  {
    icon: 'mdi:cube-outline',
    title: 'FrameWorks',
    subtitle: 'Select Framework',
    active: true
  },
  {
    icon: 'mdi:database-outline',
    title: 'Database',
    subtitle: 'Select Database'
  },
  {
    icon: 'mdi:credit-card-outline',
    title: 'Billing',
    subtitle: 'Payment Details'
  },
  {
    icon: 'mdi:check',
    title: 'Submit',
    subtitle: 'Submit'
  }
]

const renderStepCount = (activeStep: number, isLastStep: boolean, handleNext: () => void, handlePrev: () => void) => {
  switch (activeStep) {
    case 0:
      return <Details activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
    case 1:
      return (
        <FrameWork activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
      )
    case 2:
      return (
        <Database activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
      )
    case 3:
      return <Billing activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
    case 4:
      return <Submit activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} isLastStep={isLastStep} />
    default:
      return null
  }
}

const CreateApp = ({ open, setOpen }: Props) => {
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
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Create App
        <Typography component='span' className='flex flex-col text-center'>
          Provide data with this form to create your app.
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('overflow-visible', globalDialogStyles.dialogContentAlone, {
          [globalDialogStyles.smDialogContentAlone]: isBelowSmScreen
        })}
      >
        <IconButton onClick={handleClose} className={styles.closeIcon}>
          <Icon icon='mdi:close' />
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
                          <Icon icon={label.icon as string} />
                        </Avatar>
                        <div className='flex flex-col'>
                          <Typography className='step-title'>{label.title}</Typography>
                          <Typography className='step-subtitle'>{label.subtitle}</Typography>
                        </div>
                      </div>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </StepperWrapper>
          <div className='flex-1'>{renderStepCount(activeStep, isLastStep, handleNext, handlePrev)}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateApp
