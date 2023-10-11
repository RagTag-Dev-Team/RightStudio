'use client'

// React Imports
import { useEffect, useMemo, useRef, useState } from 'react'
import type { HTMLProps } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'

// Type Imports
import type { DataType } from './data'

// Style Imports
import commonStyles from './styles.module.css'
import styles from '@core/styles/libs/reactTables.module.css'

// Data Imports
import defaultData from './data'

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={classnames(className, 'cursor-pointer')} {...rest} />
}

const RowSelection = () => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const columnHelper = createColumnHelper<DataType>()

  const columns = useMemo<ColumnDef<DataType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            className={commonStyles.selectColumn}
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            className={commonStyles.selectColumn}
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
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
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => defaultData)

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader title='Row Selection' />
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
                    <tr key={row.id} className={classnames(styles.tr, { selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
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

export default RowSelection
