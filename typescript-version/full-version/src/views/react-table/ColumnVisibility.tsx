'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const defaultColumns = [
  columnHelper.accessor('fullName', {
    cell: info => info.getValue(),
    header: 'Name'
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: 'Email'
  }),
  columnHelper.accessor('start_date', {
    cell: info => info.getValue(),
    header: 'Date'
  }),
  columnHelper.accessor('experience', {
    cell: info => info.getValue(),
    header: 'Experience'
  }),
  columnHelper.accessor('age', {
    cell: info => info.getValue(),
    header: 'Age'
  })
]

const ColumnVisibility = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => defaultData)
  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns])
  const [columnVisibility, setColumnVisibility] = useState({})

  // Hooks
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
      <div className='overflow-x-auto'>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={styles.tbody}>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => (
                <tr key={row.id}>
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

export default ColumnVisibility
