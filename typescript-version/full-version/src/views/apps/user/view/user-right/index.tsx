'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

const UserRight = ({ tabContentList }: { tabContentList: { [key: string]: ReactElement } }) => {
  // States
  const [activeTab, setActiveTab] = useState('overview')

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  return (
    <>
      {activeTab === undefined ? null : (
        <TabContext value={activeTab}>
          <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-user-3-line' />
                  Overview
                </div>
              }
              value='overview'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-lock-line' />
                  Security
                </div>
              }
              value='security'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-bookmark-line' />
                  Billing & Plans
                </div>
              }
              value='billing-plans'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-notification-2-line' />
                  Notifications
                </div>
              }
              value='notifications'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-link-m' />
                  Connections
                </div>
              }
              value='connections'
            />
          </CustomTabList>
          <TabPanel value={activeTab} className='p-0'>
            {tabContentList[activeTab]}
          </TabPanel>
        </TabContext>
      )}
    </>
  )
}

export default UserRight
