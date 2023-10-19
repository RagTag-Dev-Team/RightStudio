'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Styles Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/libs/reactTables.module.css'

type TableDataType = {
  type: string
  app: boolean
  email: boolean
  browser: boolean
}

const tableData: TableDataType[] = [
  {
    app: false,
    email: true,
    browser: false,
    type: 'New for you'
  },
  {
    app: true,
    email: false,
    browser: true,
    type: 'Account activity'
  },
  {
    app: true,
    email: true,
    browser: true,
    type: 'A new browser used to sign in'
  },
  {
    app: false,
    email: false,
    browser: true,
    type: 'A new device is linked'
  }
]

// Column Definitions
const columnHelper = createColumnHelper<TableDataType>()

const columns = [
  columnHelper.accessor('type', {
    cell: info => info.getValue(),
    header: () => <div className={styles.typeColumn}>Type</div>
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: () => <div className={styles.emailColumn}>Email</div>
  }),
  columnHelper.accessor('browser', {
    cell: info => info.getValue(),
    header: () => <div className={styles.browserColumn}>Browser</div>
  }),
  columnHelper.accessor('app', {
    cell: info => info.getValue(),
    header: () => <div className={styles.appColumn}>App</div>
  })
]

const NotificationsTab = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...tableData])

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
      <CardHeader title='Notifications' />
      <Divider />
      <CardContent>
        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
          You will receive notification for the below selected items.
        </Typography>
      </CardContent>
      <Divider />
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
                    <td key={cell.id}>
                      {cell.column.id === 'type' ? (
                        <Typography>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Typography>
                      ) : (
                        <Checkbox defaultChecked={cell.getValue() as boolean} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <CardActions>
        <Button variant='contained' type='submit'>
          Save Changes
        </Button>
        <Button variant='outlined' color='secondary' type='reset'>
          Discard
        </Button>
      </CardActions>
    </Card>
  )
}

export default NotificationsTab
