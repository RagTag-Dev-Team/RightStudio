// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party Imports
import DatePicker from 'react-datepicker'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepPropertyDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          label='Total Area'
          placeholder='1000'
          InputProps={{
            endAdornment: <InputAdornment position='end'>sq-ft</InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          label='Carpet Area'
          placeholder='800'
          InputProps={{
            endAdornment: <InputAdornment position='end'>sq-ft</InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          label='Plot Area'
          placeholder='800'
          InputProps={{
            endAdornment: <InputAdornment position='end'>sq-yd</InputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          selected={date}
          placeholderText='YYYY-MM-DD'
          dateFormat={'yyyy-MM-dd'}
          onChange={(date: Date) => setDate(date)}
          customInput={<TextField fullWidth label='Available From' />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id='possession-status-radio'>Possession Status</FormLabel>
          <RadioGroup name='possession-status-group' defaultValue='under-construction'>
            <FormControlLabel value='under-construction' control={<Radio />} label='Under Construction' />
            <FormControlLabel value='ready-to-move' control={<Radio />} label='Ready to Move' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id='transaction-radio'>Transaction Type</FormLabel>
          <RadioGroup defaultValue='new-property' name='transaction-group' aria-labelledby='transaction-radio'>
            <FormControlLabel value='new-property' control={<Radio />} label='New property' />
            <FormControlLabel value='resale' control={<Radio />} label='Resale' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id='main-road-radio'>Is Property Facing Main Road</FormLabel>
          <RadioGroup defaultValue='yes' name='main-road-group' aria-labelledby='main-road-radio'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id='gated-colony-radio'>Gated Colony</FormLabel>
          <RadioGroup defaultValue='yes' name='gated-colony-group' aria-labelledby='gated-colony-radio'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
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

export default StepPropertyDetails
