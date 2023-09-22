'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import styles from '@core/styles/libs/reactTables.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const defaultColumns = [
  columnHelper.accessor('full_name', {
    cell: info => info.getValue(),
    header: () => <span>Name</span>
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: () => <span>Email</span>
  }),
  columnHelper.accessor('start_date', {
    cell: info => info.getValue(),
    header: () => <span>Date</span>
  }),
  columnHelper.accessor('experience', {
    cell: info => info.getValue(),
    header: () => <span>Experience</span>
  }),
  columnHelper.accessor('age', {
    cell: info => info.getValue(),
    header: () => <span>Age</span>
  })
]

const ColumnVisibility = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => defaultData)
  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader
        title='Toggle Column Visibility'
        action={
          <Button variant='contained' onClick={() => table.getAllLeafColumns()[1].toggleVisibility()}>
            Toggle Email Column Visibility
          </Button>
        }
      />
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default ColumnVisibility
