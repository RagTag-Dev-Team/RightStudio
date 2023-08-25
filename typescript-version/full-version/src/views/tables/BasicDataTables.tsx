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

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    header: () => <span>ID</span>
  }),
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

const BasicDataTables = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
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
  )
}

export default BasicDataTables
