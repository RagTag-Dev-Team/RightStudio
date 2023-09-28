'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party imports
import DatePicker from 'react-datepicker'

// Types Imports
import type { SidebarLeftProps, CalendarFiltersType } from '@/types/apps/calendarTypes'
import type { ThemeColor } from '@core/types'

// Style Imports
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const SidebarLeft = (props: SidebarLeftProps) => {
  const {
    mdAbove,
    leftSidebarOpen,
    calendars,
    calendarsColor,
    calendarApi,
    handleSelectEvent,
    handleAllCalendars,
    handleCalendarsUpdate,
    handleLeftSidebarToggle,
    handleAddEventSidebarToggle
  } = props

  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []

  const renderFilters = colorsArr.length
    ? colorsArr.map(([key, value]: string[]) => {
        return (
          <FormControlLabel
            key={key}
            label={key}
            control={
              <Checkbox
                color={value as ThemeColor}
                checked={calendars.selectedCalendars.includes(key as CalendarFiltersType)}
                onChange={() => handleCalendarsUpdate(key as CalendarFiltersType)}
              />
            }
          />
        )
      })
    : null

  const handleSidebarToggleSidebar = () => {
    handleSelectEvent(null)
    handleAddEventSidebarToggle()
  }

  if (renderFilters) {
    return (
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: 3,
          display: 'block',
          position: mdAbove ? 'static' : 'absolute',
          '& .MuiDrawer-paper': {
            borderRadius: 1,
            boxShadow: 'none',
            width: 280,
            borderTopRightRadius: 0,
            alignItems: 'flex-start',
            borderBottomRightRadius: 0,
            p: theme => theme.spacing(5),
            zIndex: mdAbove ? 2 : 'drawer',
            position: mdAbove ? 'static' : 'absolute'
          },
          '& .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute'
          }
        }}
      >
        <div className='w-full pbe-6'>
          <Button fullWidth variant='contained' onClick={handleSidebarToggleSidebar}>
            Add Event
          </Button>
        </div>

        <Divider className='w-full' />

        <DatePickerWrapper
          className='flex justify-center w-full'
          sx={{ '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }}
        >
          <DatePicker inline onChange={date => calendarApi.gotoDate(date)} />
        </DatePickerWrapper>

        <Divider className='w-full' />

        <Typography variant='caption' className='uppercase mbs-7 mbe-2'>
          Calendars
        </Typography>
        <FormControlLabel
          label='View All'
          control={
            <Checkbox
              color='secondary'
              checked={calendars.selectedCalendars.length === colorsArr.length}
              onChange={e => handleAllCalendars(e.target.checked)}
            />
          }
        />
        {renderFilters}
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
