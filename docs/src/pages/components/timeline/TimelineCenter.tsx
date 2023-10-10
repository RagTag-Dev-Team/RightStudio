// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import LinearProgress from '@mui/material/LinearProgress'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { TimelineProps } from '@mui/lab/Timeline'
import type { Theme } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Styles Imports
import styles from './styles.module.css'

type DataProps = {
  image: string
  title: string
  subtitle: string
  progress: number
  progressColor: ThemeColor
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTimelineItem-root': {
      width: '100%',
      '&:before': {
        display: 'none'
      }
    }
  }
}))

const ImageList = [
  '/images/misc/plant-1.png',
  '/images/misc/plant-2.png',
  '/images/misc/plant-3.png',
  '/images/misc/plant-4.png'
]

const Data: DataProps[] = [
  {
    image: '/images/misc/zipcar.png',
    title: 'Zipcar',
    subtitle: 'Vuejs, React & HTML',
    progress: 24895.65,
    progressColor: 'primary'
  },
  {
    image: '/images/misc/bitbank.png',
    title: 'Bitbank',
    subtitle: 'Sketch, Figma & XD',
    progress: 86500.2,
    progressColor: 'info'
  },
  {
    image: '/images/misc/aviato.png',
    title: 'Aviato',
    subtitle: 'HTML & Anguler',
    progress: 12450.8,
    progressColor: 'secondary'
  }
]

const TimelineCenter = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
      <TimelineItem>
        {/* We have used the following code twice because we want to show the data on the
        opposite side of the timeline on large screens and on the right side of the timeline
        on small screens. You may create components for this and use them instead. */}
        {/* <Typography variant='caption' component='div' className='mbs-3'>
          2 month's ago
        </Typography> */}
        {!isBelowMdScreen && (
          <TimelineOppositeContent color='text.disabled'>
            <Typography variant='caption' component='div' className='mbs-3'>
              2 month's ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='error'>
            <Icon icon='mdi:file-word-outline' fontSize='1.25rem' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-3'>
              2 month's ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='body1' className='font-medium mbe-4'>
                You've uploaded doc pdf to the Themeselection project
              </Typography>
              <Typography variant='body1' className={classnames('mbe-3', styles.textSecondary)}>
                he process of recording the key project details and producing the documents that are required to
                implement it successfully. Simply put, it's an umbrella term which includes all the documents created
                over the course of the project.
              </Typography>
              <div className={classnames('flex items-center gap-2.5 w-fit', styles.imageWrapper, styles.borderRadius)}>
                <img height={20} alt='documentation.pdf' src='/images/icons/pdf-document.png' />
                <Typography className='font-medium'>documentation.pdf</Typography>
              </div>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent color='text.disabled'>
            <Typography variant='caption' component='div' className='mbs-3'>
              24 day's ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='success'>
            <Icon icon='mdi:image-outline' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-3'>
              24 day's ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='body1' className='font-medium mbe-4'>
                Heather added 4 images to the Team album
              </Typography>
              <Typography variant='body1' className={classnames('mbe-3', styles.textSecondary)}>
                In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image
                section
              </Typography>
              <div className='flex gap-4'>
                {ImageList.map((image, index) => (
                  <img key={index} className={styles.borderRadius} height={114} alt='documentation.pdf' src={image} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent color='text.disabled'>
            <Typography variant='caption' component='div' className='mbs-3'>
              6 day's ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='warning'>
            <Icon icon='mdi:star-outline' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='caption' component='div' className='mbs-3'>
            6 day's ago
          </Typography>
          <Card>
            <CardContent>
              <Typography variant='body1' className='font-medium mbe-4'>
                Loretta write a review on Themeselection
              </Typography>
              <div className='flex items-center gap-4 mbe-3'>
                <Avatar src='/assets/avatars/2.png' className={styles.avatarSize} />
                <div className='flex flex-col flex-wrap'>
                  <Typography variant='body2' className='font-medium'>
                    Loretta Moore
                  </Typography>
                  <Typography variant='body2'>CTO of Airbnb</Typography>
                </div>
              </div>
              <div className='flex justify-between items-center mbe-3 flex-wrap'>
                <Rating name='read-only' value={5} readOnly />
                <Chip
                  size='small'
                  color='success'
                  label='Verified Buyer'
                  avatar={<Avatar alt='user' src='/images/avatars/1.jpg' />}
                />
              </div>
              <Typography variant='body2'>
                I wish I could select more than one main reason for rating this. I love how they constantly work on to
                make the template better. I am so thankful for this. Also, in the past, they had responded well to my
                tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I
                could rate this for so many times. I highly recommend this template!
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent color='text.disabled'>
            <Typography variant='caption' component='div' className='mbs-3'>
              2 day's ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='info'>
            <Icon icon='mdi:chart-pie-outline' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-3'>
              2 day's ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='body1' className='font-medium mbe-4'>
                Julia stiles shared an earnings report
              </Typography>
              <div className='flex items-center gap-1'>
                <Typography variant='h4'>$24,895</Typography>
                <Icon icon='mdi:menu-up' fontSize='1.875rem' className={styles.textSuccess} />
                <Typography variant='body2' className={classnames('font-medium', styles.textSuccess)}>
                  10%
                </Typography>
              </div>
              <Typography variant='caption' className='mbe-2'>
                Compared to $84,325 last year
              </Typography>
              {Data.map((item, index) => (
                <div key={index} className='flex justify-between items-center gap-2'>
                  <div className='flex items-center gap-3'>
                    <img src={item.image} width={40} height={40} />
                    <div className='flex flex-col flex-wrap gap-0.5'>
                      <Typography variant='body2' className='font-medium'>
                        {item.title}
                      </Typography>
                      <Typography variant='body2'>{item.subtitle}</Typography>
                    </div>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <Typography variant='body2' className={classnames('font-medium', styles.textPrimary)}>
                      ${item.progress}
                    </Typography>
                    <LinearProgress variant='determinate' value={75} color={item.progressColor} className='w-full' />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent color='text.disabled'>
            <Typography variant='caption' component='div' className='mbs-3'>
              2 day's ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <Icon icon='mdi:folder-outline' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-3'>
              2 day's ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='body1' className='font-medium mbe-4'>
                josh johnson shared Next js project progress report
              </Typography>
              <Typography variant='body1' className={classnames('mbe-3', styles.textSecondary)}>
                The structure and process are defined in the project organization considering the attainment of the
                corporate objectives and therefore also project objectives. The components of the project process are
              </Typography>
              <div
                className={classnames('mbe-3 flex items-center gap-2 w-fit', styles.imageWrapper, styles.borderRadius)}
              >
                <img height={20} alt='progress-report.xls.pdf' src='/images/icons/xls-document.png' />
                <Typography className='font-medium'>xls-document.pdf</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <LinearProgress variant='determinate' value={34} className='w-full' />
                <Typography>34%</Typography>
              </div>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineCenter
