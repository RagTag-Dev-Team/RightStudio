// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

import useBaseUrl from '@docusaurus/useBaseUrl' 

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none',
    },
  },
})

const TimelineOutlined = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' variant='outlined'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
            <Typography className='font-medium'>
              12 Invoices have been paid
            </Typography>
            <Typography variant='caption'>
              12 min ago
            </Typography>
          </div>
          <Typography className='mbe-2' color='text.secondary'>
            Invoices have been paid to the company
          </Typography>
          <div className='flex items-center gap-2.5 is-fit rounded bg-actionHover plb-[5px] pli-2.5'>
            <img
              height={20}
              alt='invoice.pdf'
              src={useBaseUrl('/images/icons/pdf-document.png')}
            />
            <Typography className='font-medium'>invoices.pdf</Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' variant='outlined'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
            <Typography className='font-medium'>
              Client Meeting
            </Typography>
            <Typography variant='caption'>
              45 min ago
            </Typography>
          </div>
          <Typography className='mbe-2' color='text.secondary'>
            Project meeting with john @10:15am
          </Typography>
          <div className='flex items-center gap-2.5'>
            <Avatar src={useBaseUrl('/images/avatars/2.png')} className='is-8 bs-8' />
            <div className='flex flex-col flex-wrap'>
              <Typography variant='body2' className='font-medium'>
                Lester McCarthy (Client)
              </Typography>
              <Typography variant='body2'>CEO of ThemeSelection</Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='info' variant='outlined'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
            <Typography className='font-medium'>
              Create a new project for client
            </Typography>
            <Typography variant='caption'>
              2 Day Ago
            </Typography>
          </div>
          <Typography className='mbe-2' color='text.secondary'>
            6 team members in a project
          </Typography>
          <AvatarGroup total={6} className='pull-up'>
            <Avatar alt='Travis Howard' src={useBaseUrl('/images/avatars/2.png')} />
            <Avatar alt='Agnes Walker' src={useBaseUrl('/images/avatars/4.png')} />
            <Avatar alt='John Doe' src={useBaseUrl('/images/avatars/5.png')} />
          </AvatarGroup>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineOutlined
