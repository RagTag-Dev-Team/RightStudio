'use client'

// React Imports
import { useState, useEffect } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

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
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Component Imports
import AccountTab from './account'
import SecurityTab from './security'
import BillingPlansTab from './billing-plans'
import NotificationsTab from './notifications'
import ConnectionsTab from './connections'

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
    minWidth: 130,
    borderRadius: theme.shape.borderRadius
  }
}))

const tabContentList = (data: PricingPlanType[]): { [key: string]: ReactElement } => ({
  account: <AccountTab />,
  security: <SecurityTab />,
  'billing-plans': <BillingPlansTab data={data} />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const AccountSettings = ({ tab, data }: { tab: string; data: PricingPlanType[] }) => {
  // States
  const [activeTab, setActiveTab] = useState(tab)

  const [loading, setLoading] = useState<boolean>(true)

  // Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setLoading(true)
    const pathname = `/pages/account-settings/${value.toLowerCase()}`

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
        <TabContext value={activeTab}>
          <TabList onChange={handleChange} variant='scrollable'>
            <Tab
              label={
                <div className='flex items-center'>
                  <Icon icon='mdi:account-outline' />
                  Account
                </div>
              }
              value='account'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <Icon icon='mdi:lock-open-outline' />
                  Security
                </div>
              }
              value='security'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <Icon icon='mdi:bookmark-outline' />
                  Billing & Plans
                </div>
              }
              value='billing-plans'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <Icon icon='mdi:bell-outline' />
                  Notifications
                </div>
              }
              value='notifications'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <Icon icon='mdi:link' />
                  Connections
                </div>
              }
              value='connections'
            />
          </TabList>
          <Grid item xs={12}>
            {loading ? (
              <div className='d-flex align-items-center flex-column'>
                <CircularProgress />
                <Typography>Loading...</Typography>
              </div>
            ) : (
              <TabPanel value={activeTab} className='p-0'>
                {tabContentList(data)[activeTab]}
              </TabPanel>
            )}
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default AccountSettings
