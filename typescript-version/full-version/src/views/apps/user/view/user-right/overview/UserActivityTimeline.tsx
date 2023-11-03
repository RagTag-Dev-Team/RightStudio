'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
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

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const UserActivityTimeLine = () => {
  return (
    <Card>
      <CardHeader title='User Activity Timeline' />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={styles.timelineIcon}>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium'>12 Invoices have been paid</Typography>
                <Typography variant='caption' className={commonStyles.textDisabled}>
                  12 min ago
                </Typography>
              </div>
              <Typography className={classnames('mbe-2', commonStyles.textSecondary)}>
                Invoices have been paid to the company
              </Typography>
              <div
                className={classnames(
                  'flex items-center gap-2.5 w-fit',
                  styles.imageWrapper,
                  commonStyles.borderRadius,
                  commonStyles.actionHoverColor
                )}
              >
                <img height={20} alt='invoice.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>invoices.pdf</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium'>Client Meeting</Typography>
                <Typography variant='caption' className={commonStyles.textDisabled}>
                  45 min ago
                </Typography>
              </div>
              <Typography className={classnames('mbe-2', commonStyles.textSecondary)}>
                Project meeting with john @10:15am
              </Typography>
              <div className='flex items-center gap-2.5'>
                <Avatar src='/assets/avatars/2.png' className='w-8 h-8' />
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
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography className='font-medium'>Create a new project for client</Typography>
                <Typography variant='caption' className={commonStyles.textDisabled}>
                  2 Day Ago
                </Typography>
              </div>
              <Typography className={classnames('mbe-2', commonStyles.textSecondary)}>
                6 team members in a project
              </Typography>
              <AvatarGroup total={6} className='pull-up'>
                <Avatar alt='Travis Howard' src='/images/avatars/2.jpg' />
                <Avatar alt='Agnes Walker' src='/images/avatars/4.jpg' />
                <Avatar alt='John Doe' src='/images/avatars/5.jpg' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default UserActivityTimeLine
