'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Style Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/libs/reactTables.module.css'

type DataType = {
  device: string
  browser: string
  location: string
  recentActivity: string
}

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('browser', {
    header: () => <div className={styles.browserColumn}>Browser</div>,
    cell: ({ row }) => (
      <div className='flex items-center gap-4'>
        <img alt='Chrome' width='22px' src='/images/logos/chrome.png' />
        <div>{row.original.browser}</div>
      </div>
    )
  }),
  columnHelper.accessor('device', {
    header: () => <div className={styles.deviceColumn}>Device</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('location', {
    header: () => <div className={styles.locationColumn}>Location</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('recentActivity', {
    header: () => <div className={styles.activitiesColumn}>Recent Activities</div>,
    cell: info => info.getValue()
  })
]

const recentDeviceData: DataType[] = [
  {
    device: 'Dell XPS 15',
    location: 'United States',
    browser: 'Chrome on Windows',
    recentActivity: '10, Jan 2020 20:07'
  },
  {
    location: 'Ghana',
    device: 'Google Pixel 3a',
    browser: 'Chrome on Android',
    recentActivity: '11, Jan 2020 10:16'
  },
  {
    location: 'Mayotte',
    device: 'Apple iMac',
    browser: 'Chrome on MacOS',
    recentActivity: '11, Jan 2020 12:10'
  },
  {
    location: 'Mauritania',
    device: 'Apple iPhone XR',
    browser: 'Chrome on iPhone',
    recentActivity: '12, Jan 2020 8:29'
  }
]

const RecentDevice = () => {
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

export default RecentDevice
