// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import DatePicker from 'react-datepicker'
import { subDays, addDays } from 'date-fns'

// Component Imports
import CustomInput from './PickersCustomInput'

const PickersMinMax = () => {
  // States
  const [minDate, setMinDate] = useState<Date | null | undefined>(new Date())
  const [maxDate, setMaxDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <DatePicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          onChange={(date: Date) => setMinDate(date)}
          customInput={<CustomInput label='Min Date' />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <DatePicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date) => setMaxDate(date)}
          customInput={<CustomInput label='Max Date' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMinMax
