'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import TablePagination from '@mui/material/TablePagination'
import IconButton from '@mui/material/IconButton'
import type { TextFieldProps } from '@mui/material/TextField'
import type { ButtonProps } from '@mui/material/Button'

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
import type { ThemeColor } from '@core/types'
import type { PermissionRowType } from '@/types/apps/permissionTypes'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import PermissionDialog from '@components/dialogs/permission-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type PermissionsTypeWithAction = PermissionRowType & {
  action?: string
}

type Colors = {
  [key: string]: ThemeColor
}

const colors: Colors = {
  support: 'info',
  users: 'success',
  manager: 'warning',
  administrator: 'primary',
  'restricted-user': 'error'
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

const Permissions = ({ permissionsData }: { permissionsData: PermissionRowType[] }) => {
  // States
  const [open, setOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [editValue, setEditValue] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[permissionsData])
  const [globalFilter, setGlobalFilter] = useState('')

  const handleEditPermission = (name: string) => {
    setOpen(true)
    setEditValue(name)
  }

  const handleAddPermission = () => {
    setEditValue('')
  }

  const columnHelper = createColumnHelper<PermissionsTypeWithAction>()

  const columns = useMemo<ColumnDef<PermissionsTypeWithAction, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: ({ row }) => <Typography>{row.original.name}</Typography>
      }),
      columnHelper.accessor('assignedTo', {
        header: 'Assigned To',
        cell: ({ row }) =>
          typeof row.original.assignedTo === 'string' ? (
            <Chip label={row.original.assignedTo} color={colors[row.original.assignedTo]} size='small' />
          ) : (
            row.original.assignedTo.map((item, index) => (
              <Chip key={index} label={item} color={colors[item]} size='small' />
            ))
          )
      }),
      columnHelper.accessor('createdDate', {
        header: 'Created Date',
        cell: ({ row }) => <Typography>{row.original.createdDate}</Typography>
      }),
      columnHelper.accessor('action', {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <i className='ri-edit-box-line text-[22px]' onClick={() => handleEditPermission(row.original.name)} />
            <OpenDialogOnElementClick element={IconButton} elementProps={iconButtonProps} dialog={PermissionDialog} />
            <i className='ri-delete-bin-7-line text-[22px]' />
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as PermissionRowType[],
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
        pageSize: 10
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

  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Add Permission',
    onClick: () => handleAddPermission()
  }

  const iconButtonProps: ButtonProps = {
    children: <i className='ri-edit-box-line text-[22px]' onClick={() => handleEditPermission(editValue)} />,
    onClick: () => handleEditPermission(editValue)
  }

  return (
    <>
      <Card>
        <CardContent className='flex justify-between items-center'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Permissions'
          />
          <OpenDialogOnElementClick
            element={Button}
            elementProps={buttonProps}
            dialog={PermissionDialog}
            dialogProps={{ editValue }}
          />
        </CardContent>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead className={tableStyles.thead}>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
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
                        </>
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
      <PermissionDialog open={open} setOpen={setOpen} data={editValue} />
    </>
  )
}

export default Permissions
