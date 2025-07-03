// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import { subDays, addDays } from 'date-fns'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersMinMax = () => {
  // States
  const [minDate, setMinDate] = useState<Date | null | undefined>(new Date())
  const [maxDate, setMaxDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          onChange={(date: Date) => setMinDate(date)}
          customInput={<CustomTextField label='Min Date' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date) => setMaxDate(date)}
          customInput={<CustomTextField label='Max Date' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMinMax
