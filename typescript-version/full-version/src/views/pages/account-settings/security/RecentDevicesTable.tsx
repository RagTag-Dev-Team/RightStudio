// React Imports
import type { ReactElement } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

// Style Imports
import commonStyles from '@/styles/common.module.css'
import tableStyles from '@core/styles/table.module.css'

type RecentDeviceDataType = {
  browserIcon: ReactElement
  browserName: string
  device: string
  location: string
  date: string
}

// Data
const recentDeviceData: RecentDeviceDataType[] = [
  {
    location: 'Switzerland',
    device: 'HP Spectre 360',
    date: '10, Sept 20:07',
    browserName: 'Chrome on Windows',
    browserIcon: <i className='ri-windows-fill' />
  },
  {
    location: 'Australia',
    device: 'iPhone 12x',
    date: '13, Sept 10:10',
    browserName: 'Chrome on iPhone',
    browserIcon: <i className='ri-cellphone-fill' />
  },
  {
    location: 'Dubai',
    device: 'Oneplus 9 Pro',
    date: '14, Sept 15:15',
    browserName: 'Chrome on Android',
    browserIcon: <i className='ri-android-fill' />
  },
  {
    location: 'India',
    device: 'Apple iMac',
    date: '16, Sept 16:17',
    browserName: 'Chrome on MacOS',
    browserIcon: <i className='ri-apple-fill' />
  },
  {
    location: 'Switzerland',
    device: 'HP Spectre 360',
    date: '20, Sept 21:01',
    browserName: 'Chrome on Windows',
    browserIcon: <i className='ri-windows-fill' />
  },
  {
    location: 'Dubai',
    device: 'Oneplus 9 Pro',
    date: '21, Sept 12:22',
    browserName: 'Chrome on Android',
    browserIcon: <i className='ri-android-fill' />
  }
]

const RecentDevicesTable = () => {
  return (
    <Card>
      <CardHeader title='Recent Devices' />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead className={tableStyles.thead}>
            <tr>
              <th>Browser</th>
              <th>Device</th>
              <th>Location</th>
              <th>Recent Activities</th>
            </tr>
          </thead>
          <tbody className={tableStyles.tbody}>
            {recentDeviceData.map((device, index) => (
              <tr key={index}>
                <td>
                  <div className='flex items-center'>
                    {device.browserIcon}
                    <Typography>{device.browserName}</Typography>
                  </div>
                </td>
                <td>
                  <Typography className={commonStyles.textSecondary}>{device.device}</Typography>
                </td>
                <td>
                  <Typography className={commonStyles.textSecondary}>{device.location}</Typography>
                </td>
                <td>
                  <Typography className={commonStyles.textSecondary}>{device.date}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentDevicesTable
