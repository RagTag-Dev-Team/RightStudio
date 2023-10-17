// MUI Imports
import { Card } from '@mui/material'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Component Imports
import CalendarWrapper from '@views/apps/calendar/CalendarWrapper'

// Style Imports
import StyledCalendar from '@core/styles/libs/fullcalendar'

async function fetchEvents() {
  const res = await fetch(`${process.env.API_URL}/apps/calendar-events`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CalendarApp = async ({ params }: { params: { lang: Locale } }) => {
  const res = (await fetchEvents()) || []

  const direction = getDirection(params.lang)

  return (
    <Card>
      <StyledCalendar className='app-calendar'>
        <CalendarWrapper events={res.events} direction={direction} />
      </StyledCalendar>
    </Card>
  )
}

export default CalendarApp
