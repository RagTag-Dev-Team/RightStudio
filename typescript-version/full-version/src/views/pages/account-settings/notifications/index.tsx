// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Styles Imports
import styles from './styles.module.css'
import commonStyles from '@views/pages/account-settings/styles.module.css'
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
    email: false,
    browser: false,
    type: 'New for you'
  },
  {
    app: false,
    email: false,
    browser: false,
    type: 'Account activity'
  },
  {
    app: false,
    email: false,
    browser: false,
    type: 'A new browser used to sign in'
  },
  {
    app: false,
    email: false,
    browser: false,
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

const Notifications = () => {
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
      <CardHeader
        title='Recent Devices'
        subheader={
          <>
            We need permission from your browser to show notifications.
            <Link href='/' onClick={e => e.preventDefault()} className={commonStyles.linkColor}>
              Request Permission
            </Link>
          </>
        }
      />
      <form onSubmit={e => e.preventDefault()}>
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
        <CardContent>
          <Typography>When should we send you notifications?</Typography>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Select fullWidth defaultValue='online'>
                <MenuItem value='online'>Only when I&#39;m online</MenuItem>
                <MenuItem value='anytime'>Anytime</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Save Changes
              </Button>
              <Button variant='outlined' color='secondary' type='reset'>
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  )
}

export default Notifications
