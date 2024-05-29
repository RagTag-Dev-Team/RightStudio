// React Imports
import { useEffect } from 'react'
import type { ReactNode, SyntheticEvent } from 'react'

// Mui Imports
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import type { TimelineProps } from '@mui/lab/Timeline'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Types Imports
import type { viewStateType } from './index'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

type Props = {
  backdropOpen: boolean
  setBackdropOpen: (value: boolean) => void
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  expanded: number | false
  setExpanded: (value: number | false) => void
  setViewState: (value: viewStateType) => void
  geojson: {
    type: string
    features: {
      type: string
      geometry: {
        type: string
        longitude: number
        latitude: number
      }
    }[]
  }
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

type VehicleTrackingDataType = {
  name: string
  location: string
  progress: number
  driverName: string
  passengerName: string
}

const vehicleTrackingData: VehicleTrackingDataType[] = [
  {
    name: 'VOL-342808',
    location: 'Chelsea, NY, USA',
    progress: 88,
    driverName: 'Veronica Herman',
    passengerName: 'Helen Jacobs'
  },
  {
    name: 'VOL-954784',
    location: 'Lincoln Harbor, NY, USA',
    progress: 90,
    driverName: 'Myrtle Ullrich',
    passengerName: 'William Miller'
  },
  {
    name: 'VOL-342808',
    location: 'Midtown East, NY, USA',
    progress: 60,
    driverName: 'Barry Schowalter',
    passengerName: 'Charles Anderson'
  },
  {
    name: 'VOL-343908',
    location: 'Hoboken, NY, USA',
    progress: 28,
    driverName: 'Frank Jones',
    passengerName: 'Edward Smith'
  }
]

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden pbe-5 pli-5'>{children}</div>
  } else {
    return (
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }} className='pbe-5 pli-5'>
        {children}
      </PerfectScrollbar>
    )
  }
}

const VehicleTracking = ({
  vehicleTrackingData,
  index,
  expanded,
  handleChange
}: {
  vehicleTrackingData: VehicleTrackingDataType
  index: number
  expanded: number | false
  handleChange: (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => void
}) => {
  return (
    <Accordion expanded={expanded === index} onChange={handleChange(index)} className='shadow-none before:border-0'>
      <AccordionSummary>
        <div className='flex gap-4 items-center'>
          <CustomAvatar skin='light' color='secondary'>
            <i className='ri-car-line' />
          </CustomAvatar>
          <div className='flex flex-col gap-1'>
            <Typography color='text.primary'>{vehicleTrackingData.name}</Typography>
            <Typography>{vehicleTrackingData.location}</Typography>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <Typography color='text.primary'>Delivery Process</Typography>
            <Typography>{vehicleTrackingData.progress}%</Typography>
          </div>
          <LinearProgress variant='determinate' className='bg-black' value={vehicleTrackingData.progress} />
        </div>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-checkbox-circle-line text-xl text-success' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase' color='success.main'>
                Tracking Number Created
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {vehicleTrackingData.driverName}
              </Typography>
              <Typography variant='body2'>Sep 01, 7:53 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-checkbox-circle-line text-xl text-success' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase' color='success.main'>
                Out For Delivery
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {vehicleTrackingData.driverName}
              </Typography>
              <Typography variant='body2'>Sep 03, 8:02 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outlined' className='mlb-0'>
                <i className='ri-map-pin-line text-xl text-primary' />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className='flex flex-col gap-0.5 pbs-0 pis-4 pbe-5'>
              <Typography variant='caption' className='uppercase' color='primary.main'>
                Arrived
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {vehicleTrackingData.passengerName}
              </Typography>
              <Typography variant='body2'>Sep 03, 8:02 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
  )
}

const FleetSidebar = (props: Props) => {
  // Props
  const {
    backdropOpen,
    setBackdropOpen,
    sidebarOpen,
    setSidebarOpen,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    expanded,
    setExpanded,
    setViewState,
    geojson
  } = props

  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      setViewState({
        longitude: geojson.features[panel].geometry.longitude,
        latitude: geojson.features[panel].geometry.latitude,
        zoom: 16
      })
    }

    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    if (!backdropOpen && sidebarOpen) {
      setSidebarOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdropOpen])

  return (
    <Drawer
      className='bs-full'
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      variant={!isBelowMdScreen ? 'permanent' : 'persistent'}
      ModalProps={{
        disablePortal: true,
        keepMounted: true // Better open performance on mobile.
      }}
      sx={{
        zIndex: isBelowMdScreen && sidebarOpen ? 11 : 10,
        position: !isBelowMdScreen ? 'static' : 'absolute',
        ...(isBelowSmScreen && sidebarOpen && { width: '100%' }),
        '& .MuiDrawer-paper': {
          overflow: 'hidden',
          width: isBelowSmScreen ? '100%' : '360px',
          position: !isBelowMdScreen ? 'static' : 'absolute'
        }
      }}
    >
      <div className='flex justify-between p-5'>
        <Typography variant='h5'>Fleet</Typography>

        {isBelowMdScreen ? (
          <IconButton
            onClick={() => {
              setSidebarOpen(false)
              setBackdropOpen(false)
            }}
          >
            <i className='ri-close-line' />
          </IconButton>
        ) : null}
      </div>
      <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
        {vehicleTrackingData.map((item, index) => (
          <VehicleTracking
            vehicleTrackingData={item}
            index={index}
            expanded={expanded}
            handleChange={handleChange}
            key={index}
          />
        ))}
      </ScrollWrapper>
    </Drawer>
  )
}

export default FleetSidebar
