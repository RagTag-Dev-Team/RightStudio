'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactElement, SyntheticEvent } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import MuiTabList from '@mui/lab/TabList'
import { styled } from '@mui/material/styles'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import type { TabListProps } from '@mui/lab/TabList'

// Type Imports
import type { Data } from '@/types/pages/profileTypes'

// Component Imports
import ProfileTab from './profile/index'
import TeamsTab from './teams/index'
import ProjectsTab from './projects/index'
import ConnectionsTab from './connections/index'
import UserProfileHeader from './UserProfileHeader'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 65,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const tabContentList = (data?: Data): { [key: string]: ReactElement } => ({
  profile: <ProfileTab data={data?.users.profile} />,
  teams: <TeamsTab data={data?.users.teams} />,
  projects: <ProjectsTab data={data?.users.projects} />,
  connections: <ConnectionsTab data={data?.users.connections} />
})

const UserProfile = ({ tab, data }: { tab: string; data?: Data }) => {
  // States
  const [activeTab, setActiveTab] = useState(tab)
  const [loading, setLoading] = useState<boolean>(true)

  // Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setLoading(true)
    const pathname = `/pages/user-profile/${value.toLowerCase()}`

    router.push(pathname)
  }

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <Grid container>
      <Grid item xs={12}>
        <UserProfileHeader data={data?.profileHeader} />
      </Grid>
      {activeTab === undefined ? null : (
        <Grid item xs={12}>
          <TabContext value={activeTab}>
            <TabList onChange={handleChange} variant='scrollable'>
              <Tab
                label={
                  <div className='flex items-center'>
                    <Icon icon='mdi:account-outline' />
                    Profile
                  </div>
                }
                value='profile'
              />
              <Tab
                label={
                  <div className='flex items-center'>
                    <Icon icon='mdi:account-multiple-outline' />
                    Teams
                  </div>
                }
                value='teams'
              />
              <Tab
                label={
                  <div className='flex items-center'>
                    <Icon icon='mdi:view-grid-outline' />
                    Projects
                  </div>
                }
                value='projects'
              />
              <Tab
                label={
                  <div className='flex items-center'>
                    <Icon icon='mdi:link-variant' />
                    Connections
                  </div>
                }
                value='connections'
              />
            </TabList>
            {loading ? (
              <div className='flex items-center flex-col'>
                <CircularProgress />
                <Typography>Loading...</Typography>
              </div>
            ) : (
              <TabPanel value={activeTab} className='p-0'>
                {tabContentList(data)[activeTab]}
              </TabPanel>
            )}
          </TabContext>
        </Grid>
      )}
    </Grid>
  )
}

export default UserProfile
