// React Imports
import { ReactNode } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import { styled, useTheme } from '@mui/material/styles'
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

// Type Imports
import type { ThemeColor } from '@core/types'

import useBaseUrl from '@docusaurus/useBaseUrl'

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
  const theme = useTheme()
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Timeline position={isBelowMdScreen ? 'right' : 'alternate'}>
      <TimelineItem>
        {/* We have used the following code twice because we want to show the data on the
        opposite side of the timeline on large screens and on the right side of the timeline
        on small screens. You may create components for this and use them instead. */}
        {/* <Typography variant='caption' component='div' className='mbs-5'>
          2 months ago
        </Typography> */}
        {!isBelowMdScreen && (
          <TimelineOppositeContent>
            <Typography variant='caption' component='div' className='mbs-5'>
              2 months ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='error' variant='tonal'>
            <i className='tabler-file text-xl' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-5'>
              2 months ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='h5' className='mbe-4'>
                You've uploaded doc pdf to the Themeselection project
              </Typography>
              <Typography className='mbe-3'>
                The process of recording the key project details and producing the documents that are required to
                implement it successfully. Simply put, it's an umbrella term which includes all the documents created
                over the course of the project.
              </Typography>
              <div className='flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                <img height={20} alt='documentation.pdf' src={useBaseUrl('/images/icons/pdf-document.png')} />
                <Typography className='font-medium'>documentation.pdf</Typography>
              </div>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent>
            <Typography variant='caption' component='div' className='mbs-5'>
              24 days ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='success' variant='tonal'>
            <i className='tabler-photo' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-5'>
              24 days ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='h5' className='mbe-4'>
                Heather added 4 images to the Team album
              </Typography>
              <Typography className='mbe-3'>
                In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image
                section
              </Typography>
              <div className='flex gap-4 flex-wrap'>
                {ImageList.map((image, index) => (
                  <img key={index} className='rounded' height={114} alt='documentation.pdf' src={`${useBaseUrl(image)}`} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent>
            <Typography variant='caption' component='div' className='mbs-5'>
              6 days ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='warning' variant='tonal'>
            <i className='tabler-star' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-5'>
              6 days ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='h5' className='mbe-4'>
                Loretta write a review on Themeselection
              </Typography>
              <div className='flex items-center gap-4 mbe-3'>
                <Avatar src={useBaseUrl('/images/avatars/2.png')} className='bs-[38px] is-[38px]' />
                <div className='flex flex-col flex-wrap'>
                  <Typography color='text.primary' className='font-medium'>
                    Loretta Moore
                  </Typography>
                  <Typography variant='body2'>CTO of Airbnb</Typography>
                </div>
              </div>
              <div className='flex justify-between items-center mbe-3 flex-wrap'>
                <Rating name='read-only' value={5} size='large' readOnly />
                <Chip
                  size='small'
                  variant='tonal'
                  className='uppercase'
                  color='success'
                  label='Verified Buyer'
                  avatar={<Avatar alt='user' src={useBaseUrl('/images/avatars/2.png')} className='!w-4 !h-4' />}
                />
              </div>
              <Typography>
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
          <TimelineOppositeContent>
            <Typography variant='caption' component='div' className='mbs-5'>
              2 days ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='info' variant='tonal'>
            <i className='tabler-chart-pie' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-5'>
              2 days ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='h5' className='mbe-4'>
                Julia stiles shared an earnings report
              </Typography>
              <div className='flex items-center gap-0.5 mbe-0.5'>
                <Typography variant='h4'>$24,895</Typography>
                <i className='tabler-caret-up-filled text-2xl text-success'/>
                <Typography variant='body2' className='font-medium' color='success.main'>
                  10%
                </Typography>
              </div>
              <Typography variant='body2' className='mbe-3'>
                Compared to $84,325 last year
              </Typography>
              {Data.map((item, index) => (
                <div key={index} className='flex justify-between items-center gap-3 mbe-3 last:m-0'>
                  <div className='flex items-center gap-3'>
                    <img src={`${useBaseUrl(item.image)}`} width={40} height={40} />
                    <div className='flex flex-col flex-wrap gap-0.5'>
                      <Typography color='text.primary' className='font-medium'>
                        {item.title}
                      </Typography>
                      <Typography variant='body2'>{item.subtitle}</Typography>
                    </div>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <Typography className='font-medium' color='text.primary'>
                      ${item.progress}
                    </Typography>
                    <LinearProgress variant='determinate' value={75} color={item.progressColor} className='w-full max-h-1' />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        {!isBelowMdScreen && (
          <TimelineOppositeContent>
            <Typography variant='caption' component='div' className='mbs-5'>
              2 days ago
            </Typography>
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot color='primary' variant='tonal'>
            <i className='tabler-folder' />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {isBelowMdScreen && (
            <Typography variant='caption' component='div' className='mbs-5'>
              2 days ago
            </Typography>
          )}
          <Card>
            <CardContent>
              <Typography variant='h5' className='mbe-4'>
                Josh Johnson shared Next js project progress report
              </Typography>
              <Typography className='mbe-3'>
                The structure and process are defined in the project organization considering the attainment of the
                corporate objectives and therefore also project objectives. The components of the project process are
              </Typography>
              <div className='mbe-3 flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                <img height={20} alt='progress-report.xls.pdf' src={useBaseUrl('/images/icons/xls-document.png')} />
                <Typography className='font-medium'>progress-report.xls</Typography>
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
