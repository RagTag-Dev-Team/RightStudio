'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

// Type Imports
import type { ProjectsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@views/pages/user-profile/styles.module.css'

const Projects = ({ data }: { data?: ProjectsTabType[] }) => {
  return (
    <Grid container>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Avatar src={item.avatar} />
                      <div>
                        <Typography
                          href='/'
                          component={Link}
                          onClick={e => e.preventDefault()}
                          className={styles.title}
                        >
                          {item.title}
                        </Typography>
                        <Typography>
                          <span>Client:</span>
                          {item.client}
                        </Typography>
                      </div>
                    </div>
                    <OptionMenu
                      options={[
                        'Rename Project',
                        'View Details',
                        'Add to Favorite',
                        { divider: true },
                        { text: 'Leave Project', menuItemProps: { className: commonStyles.errorColor } }
                      ]}
                    />
                  </div>
                  <div className='flex items-center justify-between flex-wrap'>
                    <div className={commonStyles.borderRadius}>
                      <div className='flex'>
                        <Typography className='font-medium'>{item.budgetSpent}</Typography>
                        <Typography>{`/${item.budget}`}</Typography>
                      </div>
                      <Typography>Total Budget</Typography>
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <Typography>Start Date:</Typography>
                        <Typography>{item.startDate}</Typography>
                      </div>
                      <div className='flex'>
                        <Typography>Deadline:</Typography>
                        <Typography>{item.deadline}</Typography>
                      </div>
                    </div>
                  </div>
                  <Typography>{item.description}</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                  <div className='flex items-center justify-between'>
                    <div className='flex'>
                      <Typography className='font-medium'>All Hours:</Typography>
                      <Typography>{item.hours}</Typography>
                    </div>
                    <Chip size='small' color={item.chipColor} label={`${item.daysLeft} days left`} />
                  </div>
                  <div className='flex items-center justify-between'>
                    <Typography>{`Tasks: ${item.completedTask}/${item.totalTask}`}</Typography>
                    <Typography>{`${Math.round((item.completedTask / item.totalTask) * 100)}% Completed`}</Typography>
                  </div>
                  <LinearProgress
                    color='primary'
                    variant='determinate'
                    value={Math.round((item.completedTask / item.totalTask) * 100)}
                  />
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center flex-grow'>
                      <AvatarGroup className='items-center pull-up'>
                        {item.avatarGroup.map((person, index) => {
                          return (
                            <Tooltip key={index} title={person.name}>
                              <Avatar src={person.avatar} alt={person.name} />
                            </Tooltip>
                          )
                        })}
                      </AvatarGroup>
                      <Typography className='flex-grow'>{item.members}</Typography>
                    </div>
                    <div className='flex items-center'>
                      <i className='ri-message-2-line' />
                      <Typography>{item.comments}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Projects
