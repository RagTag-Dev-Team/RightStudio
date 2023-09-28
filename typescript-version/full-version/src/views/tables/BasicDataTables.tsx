'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import commonStyles from './styles.module.css'
import styles from '@core/styles/libs/reactTables.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.idColumn}>ID</div>
  }),
  columnHelper.accessor('full_name', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.nameColumn}>Name</div>
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.emailColumn}>Email</div>
  }),
  columnHelper.accessor('start_date', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.dateColumn}>Date</div>
  }),
  columnHelper.accessor('experience', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.experienceColumn}>Experience</div>
  }),
  columnHelper.accessor('age', {
    cell: info => info.getValue(),
    header: () => <div className={commonStyles.ageColumn}>Age</div>
  })
]

const BasicDataTables = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...defaultData])

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
      <CardHeader title='Basic Table' />
      <CardContent>
        <div className='overflow-x-auto'>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className={styles.tr}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className={styles.th}>
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
                  <tr key={row.id} className={styles.tr}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default BasicDataTables
