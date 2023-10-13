// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import FormControlLabel from '@mui/material/FormControlLabel'
import Chip from '@mui/material/Chip'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const furnishingArray: string[] = [
  'AC',
  'TV',
  'RO',
  'Bed',
  'WiFi',
  'Sofa',
  'Fridge',
  'Cupboard',
  'Microwave',
  'Dining Table',
  'Washing Machine'
]

const StepPropertyFeatures = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const [furnishingDetails, setFurnishingDetails] = useState<string[]>(['Fridge', 'AC', 'TV'])

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Bedrooms' placeholder='3' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Floor No' placeholder='12' />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Bathroom' placeholder='4' />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='select-furnished-status'>Furnished Status</InputLabel>
          <Select id='demo-simple-select' label='Furnished Status' labelId='select-furnished-status' defaultValue=''>
            <MenuItem value='fully-furnished'>Fully Furnished</MenuItem>
            <MenuItem value='furnished'>Furnished</MenuItem>
            <MenuItem value='semi-furnished'>Semi Furnished</MenuItem>
            <MenuItem value='unfurnished'>UnFurnished</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          fullWidth
          multiple
          onChange={(event, value) => setFurnishingDetails(value as string[])}
          id='select-furnishing-details'
          options={furnishingArray}
          defaultValue={furnishingDetails}
          getOptionLabel={option => option || ''}
          renderInput={params => <TextField {...params} label='Furnishing Details' />}
          renderTags={(value: string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip key={index} size='small' label={option} {...(getTagProps({ index }) as {})} />
            ))
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel>Is There Any Common Area</FormLabel>
          <RadioGroup defaultValue='yes'>
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel>Is There Any Attached Balcony</FormLabel>
          <RadioGroup defaultValue='yes'>
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

export default StepPropertyFeatures
