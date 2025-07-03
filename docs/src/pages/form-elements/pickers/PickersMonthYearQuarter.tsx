// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersMonthYear = () => {
  // States
  const [year, setYear] = useState<Date | null | undefined>(new Date())
  const [month, setMonth] = useState<Date | null | undefined>(new Date())
  const [quarter, setQuarter] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={month}
          id='month-picker'
          showMonthYearPicker
          dateFormat='MM/yyyy'
          onChange={(date: Date) => setMonth(date)}
          customInput={<CustomTextField label='Month Picker' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showYearPicker
          selected={year}
          id='year-picker'
          dateFormat='MM/yyyy'
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomTextField label='Year Picker' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={quarter}
          id='quarter-picker'
          showQuarterYearPicker
          dateFormat='yyyy, QQQ'
          onChange={(date: Date) => setQuarter(date)}
          customInput={<CustomTextField label='Quarter Picker' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMonthYear
