'use client'

// React Imports
import { useState } from 'react'

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
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div>
      <div className='inline-block border border-black shadow rounded'>
        <button
          onClick={() => {
            console.log(table.getAllLeafColumns()[1])
            table.getAllLeafColumns()[1].toggleVisibility()
          }}
        >
          Toggle Name Column Visibility
        </button>
      </div>
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
  )
}

export default ColumnVisibility
