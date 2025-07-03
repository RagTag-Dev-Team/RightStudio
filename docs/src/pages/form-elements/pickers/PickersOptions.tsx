// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersOptions = () => {
  // States
  const [dateOpen, setDateOpen] = useState<Date | null | undefined>(null)
  const [dateClear, setDateClear] = useState<Date | null | undefined>(new Date())
  const [dateFilter, setDateFilter] = useState<Date | null | undefined>(new Date())
  const [dateWeekNum, setDateWeekNum] = useState<Date | null | undefined>(new Date())
  const [dateTodayBtn, setDateTodayBtn] = useState<Date | null | undefined>(new Date())

  const isWeekday = (date: Date) => {
    const day = new Date(date).getDay()

    return day !== 0 && day !== 6
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={4}>
        <AppReactDatepicker
          isClearable
          id='picker-clear'
          selected={dateClear}
          customInput={<CustomTextField label='Clear' fullWidth />}
          onChange={(date: Date) => setDateClear(date)}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <AppReactDatepicker
          weekLabel='Wk'
          showWeekNumbers
          id='picker-week-num'
          selected={dateWeekNum}
          onChange={(date: Date) => setDateWeekNum(date)}
          customInput={<CustomTextField label='Week Numbers' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <AppReactDatepicker
          id='picker-filter'
          selected={dateFilter}
          filterDate={isWeekday}
          onChange={(date: Date) => setDateFilter(date)}
          customInput={<CustomTextField label='Filter Dates' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <AppReactDatepicker
          showYearDropdown
          showMonthDropdown
          selected={dateOpen}
          id='picker-open-date'
          openToDate={new Date('1993/09/28')}
          onChange={(date: Date) => setDateOpen(date)}
          customInput={<CustomTextField label='Open To Date' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <AppReactDatepicker
          todayButton='Today'
          selected={dateTodayBtn}
          id='picker-date-today-btn'
          onChange={(date: Date) => setDateTodayBtn(date)}
          customInput={<CustomTextField label='Date Today Button' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersOptions
