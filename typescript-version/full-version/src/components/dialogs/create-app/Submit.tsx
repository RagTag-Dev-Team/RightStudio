// MUI Imports
import Typography from '@mui/material/Typography'
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

const Submit = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center gap-1'>
          <Typography>Submit 🥳</Typography>
          <Typography>Submit to kickstart your project.</Typography>
        </div>
        <img alt='submit-img' src='/images/cards/illustration-john.png' />
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

export default Submit
