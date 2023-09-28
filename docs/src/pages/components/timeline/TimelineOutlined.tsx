// React Imports
import React from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

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

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineOutlined = () => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineIcon}>
          <div className='flex flex-wrap items-center justify-between mbe-2 gap-x-2'>
            <Typography variant='body2' className={classnames('font-medium', styles.textPrimary)}>
              Get on the flight
            </Typography>
            <Typography variant='caption'>Wednesday</Typography>
          </div>
          <Typography variant='body2' className={styles.textPrimary}>
            <span>Charles de Gaulle Airport, Paris</span> <Icon icon='mdi:arrow-right' fontSize='1.25rem' />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption'>6:30 AM</Typography>
          <div className='mbs-2 flex items-center gap-2'>
            <img width={28} height={28} alt='invoice.pdf' src='/assets/pdf.png' />
            <Typography variant='subtitle2' className='font-medium'>
              bookingCard.pdf
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex flex-wrap items-center justify-between mbe-2 gap-x-2'>
            <Typography variant='body2' className={classnames('font-medium', styles.textPrimary)}>
              Interview Schedule
            </Typography>
            <Typography variant='caption'>6th October</Typography>
          </div>
          <Typography variant='body2' className={styles.textPrimary}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider className='mlb-3' />
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <Avatar src='/assets/avatars/2.png' className='w-8 h-8'/>
              <div className='flex flex-col'>
                <Typography variant='body2' className='font-medium'>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </div>
            </div>
            <div>
              <IconButton className={styles.textSecondary}>
                <Icon icon='mdi:message-outline' fontSize='1.25rem' />
              </IconButton>
              <IconButton className={styles.textSecondary}>
                <Icon icon='mdi:phone-dial-outline' fontSize='1.25rem' />
              </IconButton>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='flex gap-3 flex-col'>
          <div className={classnames('flex gap-3', {'flex-col': isBelowSmScreen})}>
            <ImgShoe width='85' height='85' alt='Shoe img' src='/assets/shoe.jpeg' />
            <div className='flex flex-col gap-2'>
              <div
                className='flex flex-wrap items-center justify-between gap-x-2'
              >
                <Typography
                  variant='body2'
                 className={classnames('font-medium', styles.textPrimary)}
                >
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption'>
                  4th October
                </Typography>
              </div>
              <Typography variant='body2' className={styles.textPrimary}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </div>
          </div>
          <div className='flex flex-wrap justify-between text-center gap-2'>
            <div>
              <Typography variant='subtitle2' className='font-medium'>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </div>
            <div>
              <Typography variant='subtitle2' className='font-medium'>
                Price
              </Typography>
              <Typography variant='caption'>$375.00</Typography>
            </div>
            <div>
              <Typography variant='subtitle2' className='font-medium'>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='flex flex-col gap-2'>
          <div className='flex flex-wrap items-center justify-between gap-x-2'>
            <Typography variant='body2' className={classnames('font-medium', styles.textPrimary)}>
              Design Review
            </Typography>
            <Typography variant='caption'>4th October</Typography>
          </div>
          <Typography variant='body2' className={styles.textPrimary}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <div className='flex items-center gap-2'>
            <Avatar src='/assets/avatars/1.png' className='w-8 h-8' />
            <Typography variant='subtitle2' className='font-medium'>
              John Doe (Client)
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineOutlined
