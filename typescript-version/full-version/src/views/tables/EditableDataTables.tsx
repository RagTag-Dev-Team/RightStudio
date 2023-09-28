'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnDef, Row, RowData, Column, Table } from '@tanstack/react-table'

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
  columnHelper.accessor('full_name', {
    header: () => <div className={commonStyles.nameColumn}>Name</div>
  }),
  columnHelper.accessor('email', {
    header: () => <div className={commonStyles.emailColumn}>Email</div>
  }),
  columnHelper.accessor('start_date', {
    header: () => <div className={commonStyles.dateColumn}>Date</div>
  }),
  columnHelper.accessor('experience', {
    header: () => <div className={commonStyles.experienceColumn}>Experience</div>
  }),
  columnHelper.accessor('age', {
    header: () => <div className={commonStyles.ageColumn}>Age</div>
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
    filterFns: {
      fuzzy: () => false
    },

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
    <Card>
      <CardHeader title='Editable Table' />
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
                .map(row => {
                  return (
                    <tr key={row.id} className={styles.tr}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id} className={classnames(styles.cellWithInput, styles['input-border-0'])}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default EditableDataTables
