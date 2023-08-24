'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import type { ColumnDef, Row, RowData, Column, Table } from '@tanstack/react-table'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Data Imports
import type { DataType } from './data'
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('full_name', {
    header: () => <span>Name</span>
  }),
  columnHelper.accessor('email', {
    header: () => <span>Email</span>
  }),
  columnHelper.accessor('start_date', {
    header: () => <span>Date</span>
  }),
  columnHelper.accessor('experience', {
    header: () => <span>Experience</span>
  }),
  columnHelper.accessor('age', {
    header: () => <span>Age</span>
  })
]

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void
  }
}

// Custom cell component that handles input with state and side-effects
interface EditableCellProps<TData extends RowData> {
  getValue: () => unknown
  row: Row<TData>
  column: Column<TData>
  table: Table<TData>
}

const EditableCell = <TData extends RowData>({ getValue, row, column, table }: EditableCellProps<TData>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value as string} onChange={e => setValue(e.target.value)} onBlur={onBlur} />
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<DataType>> = {
  cell: ({ getValue, row, column, table }) => {
    return <EditableCell getValue={getValue} row={row} column={column} table={table} />
  }
}

const EditableDataTables = () => {
  const [data, setData] = useState(() => defaultData)

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),

    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value
              }
            }

            return row
          })
        )
      }
    }
  })

  return (
    <div className='p-2'>
      <div className='h-2' />
      <table className='w-full'>
        <thead>
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
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default EditableDataTables
