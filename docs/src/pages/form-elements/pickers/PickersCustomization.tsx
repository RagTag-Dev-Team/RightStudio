// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import { subDays, addDays } from 'date-fns'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersCustomization = () => {
  // States
  const [dateFormat, setDateFormat] = useState<Date | null | undefined>(new Date())
  const [dateHighlight, setDateHighlight] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          id='custom-format'
          selected={dateFormat}
          dateFormat='MMMM d, yyyy'
          onChange={(date: Date) => setDateFormat(date)}
          customInput={<CustomTextField label='Custom Date Format' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          id='highlight-dates'
          selected={dateHighlight}
          onChange={(date: Date) => setDateHighlight(date)}
          customInput={<CustomTextField label='Highlight Dates' fullWidth />}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        />
      </Grid>
    </Grid>
  )
}

export default PickersCustomization
