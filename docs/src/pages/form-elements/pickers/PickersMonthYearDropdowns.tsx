// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersMonthYearDropdowns = () => {
  // States
  const [year, setYear] = useState<Date | null | undefined>(new Date())
  const [month, setMonth] = useState<Date | null | undefined>(new Date())
  const [monthYear, setMonthYear] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={month}
          showMonthDropdown
          id='month-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setMonth(date)}
          customInput={<CustomTextField label='Month Dropdown' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={year}
          showYearDropdown
          id='year-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomTextField label='Year Dropdown' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showYearDropdown
          showMonthDropdown
          selected={monthYear}
          id='month-year-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setMonthYear(date)}
          customInput={<CustomTextField label='Month & Year Dropdown' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMonthYearDropdowns
