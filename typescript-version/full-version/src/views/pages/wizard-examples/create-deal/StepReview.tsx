// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Style Imports
import styles from '@core/styles/libs/reactTables.module.css'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepReview = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Typography className='mb-4'>Almost done! 🚀</Typography>
        <Typography className='mb-4'>Confirm your deal details information and submit to create it.</Typography>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Deal Type</td>
              <td>Percentage</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Deal Code</td>
              <td>
                <Chip label='25PEROFF' color='warning' />
              </td>
            </tr>
            <tr>
              <td>Deal Title</td>
              <td>Black friday sale, 25% OFF</td>
            </tr>
            <tr>
              <td>Deal Duration</td>
              <td>2021-07-14 to 2021-07-30</td>
            </tr>
          </tbody>
        </table>
        <FormControlLabel control={<Switch />} label='I have confirmed the deal details.' />
      </Grid>
      <Grid item lg={6} xl={5} xs={12}>
        <div className='flex justify-center items-end w-full h-full'>
          <img alt='review-illustration' src='' />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<i className='ri-arrow-left-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={<i className={activeStep === steps.length - 1 ? 'ri-check-line' : 'ri-arrow-right-line'} />}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepReview
