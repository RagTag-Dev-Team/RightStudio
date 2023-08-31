// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
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

// Icon Imports
import Icon from '@core/components/IconifyIcon'

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

const TimelineFilled = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', columnGap: 2 }}>
            <Typography variant='body2' sx={{  fontWeight: 500, color: 'text.primary' }}>
              Get on the flight
            </Typography>
            <Typography variant='caption'>Wednesday</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            <span>Charles de Gaulle Airport, Paris</span> <Icon icon='mdi:arrow-right' fontSize='1.25rem' />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption'>6:30 AM</Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <img width={28} height={28} alt='invoice.pdf' src='/assets/pdf.png' />
            <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', columnGap: 2 }}>
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              Interview Schedule
            </Typography>
            <Typography variant='caption'>6th October</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Avatar src='/assets/avatars/2.png' sx={{ width: '2rem', height: '2rem' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500 }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='mdi:message-outline' fontSize='1.25rem' />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='mdi:phone-dial-outline' fontSize='1.25rem' />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
            <ImgShoe width='85' height='85' alt='Shoe img' src='/assets/shoe.jpeg' />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', columnGap: 2 }}
              >
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 500, color: 'text.primary' }}
                >
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption'>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ color: 'text.primary' }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center', gap: 2 }}>
            <div>
              <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </div>
            <div>
              <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
                Price
              </Typography>
              <Typography variant='caption'>$375.00</Typography>
            </div>
            <div>
              <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', columnGap: 2 }}>
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              Design Review
            </Typography>
            <Typography variant='caption'>4th October</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src='/assets/avatars/1.png' sx={{ width: '2rem', height: '2rem' }} />
            <Typography variant='subtitle2' sx={{ fontWeight: 500 }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineFilled
