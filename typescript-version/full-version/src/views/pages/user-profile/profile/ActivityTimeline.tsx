// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader title='Activity Timeline' avatar={<Icon icon='mdi:chart-timeline-variant' />} />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4'>
                <Typography>12 Invoices have been paid</Typography>
                <Typography>12 min ago</Typography>
              </div>
              <Typography>Invoices have been paid to the company.</Typography>
              <div>
                <img alt='invoice.pdf' src='/images/pdf.png' />
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4'>
                <Typography>Client Meeting</Typography>
                <Typography>45 min ago</Typography>
              </div>
              <Typography>Project meeting with john @10:15am</Typography>
              <div className='flex items-center'>
                <Avatar src='images/1.png' />
                <div>
                  <Typography>Lester McCarthy (Client)</Typography>
                  <Typography>CEO of ThemeSelection</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4'>
                <Typography>Create a new project for client</Typography>
                <Typography>2 Day Ago</Typography>
              </div>
              <Typography>6 team members in a project</Typography>
              <AvatarGroup total={6}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
                <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
