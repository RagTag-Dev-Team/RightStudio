// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@docComponents/styled-components/AppReactDatepicker'

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
          customInput={<CustomInput label='Month Picker' />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showYearPicker
          selected={year}
          id='year-picker'
          dateFormat='MM/yyyy'
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomInput label='Year Picker' />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={quarter}
          id='quarter-picker'
          showQuarterYearPicker
          dateFormat='yyyy, QQQ'
          onChange={(date: Date) => setQuarter(date)}
          customInput={<CustomInput label='Quarter Picker' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersMonthYear
