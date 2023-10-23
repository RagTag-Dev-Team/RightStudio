'use client'

// React Imports
import { useEffect, useMemo, useRef, useState } from 'react'
import type { HTMLProps } from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ProjectTableRowType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import commonStyles from '@views/pages/user-profile/styles.module.css'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

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

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

const ProjectTables = ({ projectTable }: { projectTable?: ProjectTableRowType[] }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[projectTable])
  const [globalFilter, setGlobalFilter] = useState('')

  const columnHelper = createColumnHelper<ProjectTableRowType>()

  const columns = useMemo<ColumnDef<ProjectTableRowType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('title', {
        header: 'Name',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <Avatar src={row.original.avatar} />
            <div className='flex flex-col'>
              <Typography>{row.original.title}</Typography>
              <Typography>{row.original.subtitle}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('leader', {
        header: 'Leader',
        cell: ({ row }) => <Typography>{row.original.leader}</Typography>
      }),
      columnHelper.accessor('avatarGroup', {
        header: 'Team',
        cell: ({ row }) => (
          <AvatarGroup max={4} className='flex items-center'>
            {row.original.avatarGroup.map((avatar, index) => (
              <Avatar key={index} src={avatar} />
            ))}
          </AvatarGroup>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('status', {
        header: 'Progress',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <LinearProgress color='primary' value={row.original.status} variant='determinate' className='w-20' />
            <Typography>{`${row.original.status}%`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: () => (
          <OptionMenu
            options={[
              'Details',
              'Archive',
              { divider: true },
              { text: 'Delete', menuItemProps: { className: commonStyles.errorColor } }
            ]}
          />
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as ProjectTableRowType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 7
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        title='Projects'
        action={
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search all columns...'
          />
        }
      />

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead className={tableStyles.thead}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className='ri-arrow-up-s-line text-xl' />,
                          desc: <i className='ri-arrow-down-s-line text-xl' />
                        }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={tableStyles.tbody}>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 7, 10]}
        component='div'
        className={tableStyles.paginationWrapper}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default ProjectTables
