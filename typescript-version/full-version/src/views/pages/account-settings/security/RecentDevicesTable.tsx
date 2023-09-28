// React Imports
import { useState } from 'react'
import type { ReactElement } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import classnames from 'classnames'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/libs/reactTables.module.css'

type RecentDeviceDataType = {
  browserIcon: ReactElement
  browserName: string
  device: string
  location: string
  date: string
}

// Column Definitions
const columnHelper = createColumnHelper<RecentDeviceDataType>()

const columns = [
  columnHelper.accessor('browserName', {
    header: 'Browser',
    cell: ({ row }) => (
      <div className={classnames('flex items-center', styles.browserNameColumn)}>
        <span className='flex'>{row.original.browserIcon}</span>
        <span>{row.original.browserName}</span>
      </div>
    )
  }),
  columnHelper.accessor('device', {
    cell: info => info.getValue(),
    header: () => <div className={styles.deviceColumn}>Device</div>
  }),
  columnHelper.accessor('location', {
    cell: info => info.getValue(),
    header: () => <div className={styles.locationColumn}>Location</div>
  }),
  columnHelper.accessor('date', {
    cell: info => info.getValue(),
    header: () => <div className={styles.recentActivitiesColumn}>Recent Activities</div>
  })
]

// Data
const recentDeviceData: RecentDeviceDataType[] = [
  {
    location: 'Switzerland',
    device: 'HP Spectre 360',
    date: '10, Sept 20:07',
    browserName: 'Chrome on Windows',
    browserIcon: <Icon icon='mdi:microsoft-windows' />
  },
  {
    location: 'Australia',
    device: 'iPhone 12x',
    date: '13, Sept 10:10',
    browserName: 'Chrome on iPhone',
    browserIcon: <Icon icon='mdi:cellphone' />
  },
  {
    location: 'Dubai',
    device: 'Oneplus 9 Pro',
    date: '14, Sept 15:15',
    browserName: 'Chrome on Android',
    browserIcon: <Icon icon='mdi:android' />
  },
  {
    location: 'India',
    device: 'Apple iMac',
    date: '16, Sept 16:17',
    browserName: 'Chrome on MacOS',
    browserIcon: <Icon icon='mdi:apple' />
  },
  {
    location: 'Switzerland',
    device: 'HP Spectre 360',
    date: '20, Sept 21:01',
    browserName: 'Chrome on Windows',
    browserIcon: <Icon icon='mdi:microsoft-windows' />
  },
  {
    location: 'Dubai',
    device: 'Oneplus 9 Pro',
    date: '21, Sept 12:22',
    browserName: 'Chrome on Android',
    browserIcon: <Icon icon='mdi:android' />
  }
]

const RecentDevicesTable = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...recentDeviceData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader title='Recent Devices' />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className={tableStyles.tr}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={tableStyles.th}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => (
                <tr key={row.id} className={tableStyles.tr}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default RecentDevicesTable
